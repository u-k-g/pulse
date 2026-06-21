<h1 align="center">pulse!</h1>

<p align="center">
  Tiny Embassy firmware for the nice!nano v2.
</p>

## Behavior

On boot, `pulse` keeps external VCC enabled with `P0.13` high, drives DRV8833
`IN1`/`IN3` high from nice!nano v2 pins labeled `113`/`022`
(`P1.13`/`P0.22`), holds `IN2`/`IN4` low from pins labeled `115`/`024`
(`P1.15`/`P0.24`), blinks the blue LED in short bursts, then turns it off and
enters System OFF.

## Commands

```sh
just f
```

Builds, converts to UF2, waits for the `NICENANO` bootloader volume, and flashes.

```sh
just lint
```

Runs Clippy with warnings denied.
