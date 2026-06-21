<h1 align="center">pulse!</h1>

<p align="center">
  Tiny Embassy firmware for the nice!nano v2.
</p>

## Behavior

At build time, `pulse` compiles in the delay from the compiling machine's local
time to the requested alarm time. On boot, it keeps external VCC enabled with
`P0.13` high, waits for that delay, then runs both DRV8833 motor channels
through the roughly 10 second alarm cadence. Pins labeled `113`/`022`
(`P1.13`/`P0.22`) drive
`IN1`/`IN3`; pins labeled `115`/`024` (`P1.15`/`P0.24`) hold `IN2`/`IN4` low.
After the pattern, all DRV8833 inputs are low before entering System OFF.

## Commands

```sh
just f 16:55
```

Builds an alarm for the next local `16:55`, converts to UF2, waits for the
`NICENANO` bootloader volume, and flashes. Running `just f` without a time builds
an immediate alarm.

```sh
just lint
```

Runs Clippy with warnings denied.
