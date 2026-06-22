# Wrist-Worn Wake Device Specifics

## Charging And Programming Interface

Use a 6-contact magnetic pogo/pad interface on the wearable.

Wearable-side signals:

```text
GND
5V_CHG
SWDIO
SWDCLK
RESET
VREF
```

The charger/programmer should be a magnetic dock or cable that snaps onto the device. The wearable has sealed, gold-plated pads. The pogo pins live in the dock/cable.

The 6-pin interface supports:

- Charging through `5V_CHG` and `GND`.
- Firmware upload through SWD.
- Target voltage reference through `VREF`.
- Reset control through `RESET`.

The normal charger may only populate/use `5V_CHG` and `GND`. A developer/programmer dock should use all six pins.

## Wireless

BLE is the required wireless interface for the current version.

Bluetooth behavior should follow the pattern used by high-quality wrist-worn devices that support vibration alarms, balancing reliability, battery life, and setup simplicity.

## Vibration

Vibration should be designed around aggressive wake-up force, not subtle notification haptics.

The current electronics direction is:

- Use ERM vibration motors.
- Use a real brushed DC H-bridge motor driver.
- Design the board to support two motor positions/connectors if space allows, even if the first build populates only one motor.
- Drive the motor rail from the protected battery/system rail for maximum practical vibration strength.

## Power Architecture

Use a single-cell LiPo architecture.

Preferred architecture:

```text
LiPo cell
  -> battery protection / protected pack
  -> charger + power path
  -> system rail / nRF52840 supply
  -> motor driver from protected battery or system rail
  -> fuel gauge monitors cell
```

The current board should not need an always-on buck-boost converter.

## Components / Stuff Currently Decided

These are the current recommended electronics components for the wearable PCB.

| Function | Recommended part | Notes |
|---|---|---|
| BLE MCU | `NRF52840-QIAA-R` | Preferred MCU. BLE, SWD, enough RAM/flash, and a mature hardware ecosystem. |
| Charger / power path | `BQ21061YFPR` | 1-cell Li-ion charger with power path and ship mode. |
| Fuel gauge | `MAX17048G+T10` | Low-power 1-cell LiPo fuel gauge. |
| Motor driver | `DRV8212PDSGR` | Brushed DC H-bridge motor driver with strong peak-current margin. |
| Vibration motor | `Vybronics VC1234B016F` | 12 mm x 3.4 mm, 3 V coin ERM motor; chosen for aggressive vibration. |
| Accelerometer | `LIS2DW12TR` | Low-power motion input for wake/snooze gestures and movement detection. |
| RF antenna | `2450AT18B100E` | 2.4 GHz chip antenna; requires proper RF layout and matching validation. |
| 32 MHz crystal | `NX2016SA-32MHZ-STD-CZS-5` | Main nRF high-frequency crystal. |
| 32.768 kHz crystal | `ABS07-32.768KHZ-T` | Low-frequency clock for accurate local alarms. |
| Battery thermistor | `NCP15XH103F03RC` | 10k NTC for battery/charger temperature safety. |
| Button | `KSC241GLFS` | Sealed tactile switch family; better than generic low-quality tact switches. |
| Pogo/debug ESD | `TPD4E05U06DQAR` | ESD protection for exposed debug/contact lines. |
| 5 V input ESD | `PESD5V0S1BBN` | ESD protection for exposed charge input. |
| Input fuse | `MF-PSMF050X-2` | Resettable protection on pogo 5 V input. |
| Battery protection | `BQ297xx` + dual N-MOSFET such as `FS8205A` | Exact `BQ297xx` variant depends on final cell limits. Can be omitted from main PCB if using a properly protected certified cell/pack. |

## MCU Family Decision

Default to `nRF52840`.

Use the nRF52840 for the current board because it gives the device BLE, SWD, adequate memory, and a mature hardware ecosystem without adding unnecessary board complexity.

## Developer / Programmer Dock Direction

USB-C belongs on the dock/cable side.

Recommended developer dock architecture:

```text
Laptop USB-C
  -> dock PCB
  -> USB/SWD bridge
  -> level shifting using target VREF
  -> magnetic pogo pins
  -> wearable 6-pad interface
```

Current recommended dock-side components:

| Function | Recommended part | Notes |
|---|---|---|
| USB-C receptacle | `USB4105-GF-A` | Dock only, not wearable body. |
| Debug bridge MCU | `RP2040` | Good open developer-dock controller candidate. |
| RP2040 flash | `W25Q16JVSNIQ` | External SPI flash for RP2040. |
| Dock 3.3 V regulator | `AP2112K-3.3TRG1` | Simple dock-side regulator. |
| USB ESD | `USBLC6-2P6` | Protect USB data lines. |
| SWD level shifting | `SN74LVC2T45DCUR` | Helps respect wearable target voltage through `VREF`. |
| Pogo contacts | Harwin P70 or Mill-Max spring-loaded contacts | Use gold-plated spring contacts in the dock. |

## Open Electronics Decisions

- Exact motor mounting and connector strategy.
- Exact magnetic pad geometry and dock keying.
- Whether battery protection lives in the pack or on the main PCB.
