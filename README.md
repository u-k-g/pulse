<h1 align="center">pulse!</h1>

<p align="center">
  Tiny Embassy firmware for the nice!nano v2.
</p>

## Behavior

On boot, `pulse` keeps external VCC enabled with `P0.13` high, drives the
nice!nano v2 pins labeled `113`/`115` (`P1.13`/`P1.15`) high, blinks the blue
LED in short bursts, then turns it off and enters System OFF.

## Commands

```sh
just f
```

Builds, converts to UF2, waits for the `NICENANO` bootloader volume, and flashes.

```sh
just lint
```

Runs Clippy with warnings denied.
