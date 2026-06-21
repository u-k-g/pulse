<h1 align="center">pulse!</h1>

<p align="center">
  Tiny Embassy firmware for the nice!nano v2.
</p>

## Behavior

On boot, `pulse` keeps external VCC enabled with `P0.13` high, then runs both
DRV8833 motor channels through a repeated alarm cadence: five 80 ms pulses with
40 ms gaps, followed by one 200 ms pulse. Pins labeled `113`/`022`
(`P1.13`/`P0.22`) drive `IN1`/`IN3`; pins labeled `115`/`024`
(`P1.15`/`P0.24`) hold `IN2`/`IN4` low. After the pattern, all DRV8833 inputs
are low before entering System OFF.

## Commands

```sh
just f
```

Builds, converts to UF2, waits for the `NICENANO` bootloader volume, and flashes.

```sh
just lint
```

Runs Clippy with warnings denied.
