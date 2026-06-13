target := "thumbv7em-none-eabi"
app := "pulse"
uf2_name := "PULSE.UF2"
bootloader_base := "0x26000"
family_id := "0xADA52840"
volume := "NICENANO"

alias f := flash

default:
    @just --list

deps:
    @command -v nu >/dev/null || { echo "Missing dependency: nu"; exit 1; }
    @if ! command -v llvm-objcopy >/dev/null; then \
        echo "Missing dependency: llvm-objcopy"; \
        exit 1; \
    fi
    @target_libdir="$(rustc --print target-libdir --target {{ target }})"; \
    if ! find "$target_libdir" -name 'libcore-*.rlib' -print -quit 2>/dev/null | grep -q .; then \
        echo "Missing Rust target stdlib: {{ target }}"; \
        echo "Install/use a default Rust toolchain that includes {{ target }}."; \
        exit 1; \
    fi

fmt:
    cargo fmt
    taplo fmt
    just --fmt

lint: deps
    RUSTC="$(command -v rustc)" RUSTDOC="$(command -v rustdoc)" RUSTC_WORKSPACE_WRAPPER="$(command -v clippy-driver)" RUSTFLAGS="-D warnings" cargo check --release

build: deps
    cargo build --release
    @objcopy() { \
        if command -v llvm-objcopy >/dev/null; then \
            llvm-objcopy "$@"; \
        else \
            host="$(rustc -vV | sed -n 's/^host: //p')"; \
            sysroot="$(rustc --print sysroot)"; \
            "$sysroot/lib/rustlib/$host/bin/llvm-objcopy" "$@"; \
        fi; \
    }; \
    objcopy -O binary target/{{ target }}/release/{{ app }} {{ app }}.bin
    nu tools/uf2conv.nu {{ app }}.bin -b {{ bootloader_base }} -f {{ family_id }} -o {{ app }}.uf2

flash: build
    @echo "Double-tap reset on the nice!nano v2 to mount /Volumes/{{ volume }}."
    @for _ in {1..60}; do \
        if [[ -d "/Volumes/{{ volume }}" ]]; then \
            echo "Found /Volumes/{{ volume }}, waiting for it to become writable."; \
            for attempt in {1..20}; do \
                if cp "{{ app }}.uf2" "/Volumes/{{ volume }}/{{ uf2_name }}" 2>/dev/null; then \
                    sync; \
                    echo "Copied {{ app }}.uf2 to /Volumes/{{ volume }}, waiting for reboot."; \
                    for reboot_attempt in {1..40}; do \
                        if [[ ! -d "/Volumes/{{ volume }}" ]]; then \
                            echo "Flashed {{ app }}.uf2 to /Volumes/{{ volume }}"; \
                            exit 0; \
                        fi; \
                        sleep 0.25; \
                    done; \
                    echo "/Volumes/{{ volume }} is still mounted; the bootloader may not have accepted the UF2."; \
                    exit 1; \
                fi; \
                sleep 0.25; \
            done; \
            echo "Failed to copy {{ app }}.uf2 to /Volumes/{{ volume }}"; \
            exit 1; \
        fi; \
        sleep 1; \
    done; \
    echo "Timed out waiting for /Volumes/{{ volume }}"; \
    exit 1
