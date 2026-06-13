# pulse

Minimal Embassy firmware for a nice!nano v2. It initializes the nRF52840, turns
off the nice!nano external VCC rail with P0.13, then enters System OFF. The MCU
stays off until reset is asserted with the reset button/RST pin or another
hardware wake source.

## Build

```sh
cargo build --release
```

## Flashing notes

The project links at `0x26000` for the nice!nano's Adafruit nRF52 UF2 bootloader.
To make a UF2 for drag-and-drop flashing, convert the release binary with the
Adafruit UF2 family ID for nRF52840:

```sh
cargo objcopy --release -- -O binary pulse.bin
uf2conv.py pulse.bin -c -b 0x26000 -f 0xADA52840 -o pulse.uf2
```

Then double-tap reset to mount the `NICENANO` drive and copy `pulse.uf2` to it.
