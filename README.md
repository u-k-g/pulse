<h1 align="center">pulse!</h1>

<p align="center">
  Tiny Embassy firmware for the nice!nano v2.
</p>

## Behavior

At build time, `pulse` compiles in the delay from the compiling machine's local
time to the requested alarm time. On boot, it keeps external VCC enabled with
`P0.13` high, keeps DRV8833 `EEP`/sleep low on `P1.00`, waits for that delay,
then wakes the driver and runs both motor channels through the roughly 10 second
alarm cadence. `P1.11` drives `IN1`, `P0.10` holds `IN2` low, pin `022`
(`P0.22`) drives `IN3`, and pin `024` (`P0.24`) holds `IN4` low. After the
pattern, all DRV8833 inputs and `EEP` are low before entering System OFF.

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
