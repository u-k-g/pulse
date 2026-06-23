# Wrist-Worn Wake Device Specifics

This file is the electronics source of truth for the first tscircuit PCB pass.

## PCB Targets

### Wearable Main Board

The first PCB to design is the wearable main board. It contains:

- BLE MCU and RF antenna.
- Single-cell LiPo charger/power path.
- Battery fuel gauge.
- One required ERM vibration motor channel.
- One optional second ERM vibration motor channel footprint.
- Motion sensor.
- Button input.
- Six exposed charge/program pads.

Use a compact 4-layer PCB for the final wearable main board. The exact outline is still open, and the current tscircuit version uses a simple placeholder rectangle until the mechanical outline is known.

Product envelope limit is 34.7 mm x 24 mm x 10.6 mm. Preferred target envelope is about 31.2 mm x 21.6 mm x 9.5 mm if the battery, motor, board, sealing, and contact interface fit. The wearable PCB should target about 28.5 mm x 18.5 mm or smaller in the next layout pass, leaving room for enclosure walls, sealing features, battery swelling allowance, motor mounting, and contact mechanics.

### Charger / Programmer Dock

The charger should follow the MacBook MagSafe contact style: the cable/dock end presents as a clean metal-faced magnetic connector, with spring contacts recessed inside the connector head. From top-down it should not look like exposed hobby pogo pins.

The wearable side should provide the mating exposed contacts/pads. The charger-side spring contacts sit recessed behind the outer lip of the charger head; the wearable-side contact geometry and the charger lip/magnets bring the contacts into compression when snapped together.

There are two charger/dock variants:

- Basic charger: uses only `V5_CHG` and `GND`.
- Developer/programmer dock: uses all six contacts and provides USB-to-SWD programming.

The wearable main board and developer/programmer dock both have first-pass tscircuit files now. Treat them as electrical/placement sketches, not fab outputs.

## tscircuit Project Structure

Use the current repo as the tscircuit project.

Recommended file direction:

- `index.circuit.tsx`: wearable main board.
- `charger.circuit.tsx`: developer/programmer dock board.

For the wearable board schematic, use these sections:

- `Power`
- `MCU_RF`
- `Vibration`
- `Motion_Button`
- `Charge_Program_Interface`

Use `<schematicsection />` and set `schSectionName` on components so the schematic stays readable.

## Named Nets

Use these net names consistently in the tscircuit design.

### Power Nets

| Net | Meaning |
|---|---|
| `GND` | System ground. |
| `V5_CHG` | Exposed charger input from magnetic dock. |
| `V5_PROT` | Protected 5 V charger input after fuse/ESD. |
| `VBAT` | Single-cell LiPo battery voltage. |
| `VSYS` | Charger/power-path system output. |
| `VDD_NRF` | nRF52840 logic/RF supply. |
| `VDD_IO` | I/O/sensor logic rail. |

### Dock Nets

| Net | Meaning |
|---|---|
| `USB_VBUS` | USB-C 5 V input on the dock. |
| `V3_3_DOCK` | Dock-side RP2040/translator logic rail. |
| `V5_SWITCH_IN` | Dock 5 V after the input fuse and before the pogo load switch. |
| `V5_POGO` | Dock 5 V after the current-limited load switch, connected to the pogo power contact. |
| `VREF_TGT` | Target voltage reference from the wearable. |
| `POGO_EN` | RP2040 output that enables dock-side pogo 5 V. |
| `POGO_FAULT_N` | TPS2553 fault signal back to the RP2040. |
| `RP_SWDIO_DIR` | RP2040 output controlling SWDIO translator direction. |

### Programming Nets

| Net | Meaning |
|---|---|
| `SWDIO` | nRF52840 SWD data. |
| `SWDCLK` | nRF52840 SWD clock. |
| `RESET_N` | nRF52840 reset. |
| `VREF` | Target voltage reference exposed to programmer dock. |

### Sensor / Control Nets

| Net | Meaning |
|---|---|
| `I2C_SCL` | Shared I2C clock. |
| `I2C_SDA` | Shared I2C data. |
| `ACC_INT1` | Accelerometer interrupt to MCU. |
| `BTN_WAKE` | Button signal to MCU. |
| `CHG_STAT` | Charger status signal to MCU if available. |
| `BAT_NTC` | Battery thermistor input to charger. |

### Motor Nets

| Net | Meaning |
|---|---|
| `MOTOR1_IN1` | MCU control into motor driver 1. |
| `MOTOR1_IN2` | MCU control into motor driver 1. |
| `MOTOR1_OUT_P` | Motor 1 driver output. |
| `MOTOR1_OUT_N` | Motor 1 driver output. |
| `MOTOR2_IN1` | MCU control into optional motor driver 2. |
| `MOTOR2_IN2` | MCU control into optional motor driver 2. |
| `MOTOR2_OUT_P` | Optional motor 2 driver output. |
| `MOTOR2_OUT_N` | Optional motor 2 driver output. |

## Wearable Board Interface

Create a custom six-pad connector named `J_POGO`.

Represent it in tscircuit as a `<connector />` with a custom `<footprint>` containing six `<smtpad />` pads. The wearable side should be exposed gold contacts/pads. The spring pogo contacts are recessed into the charger-side connector head.

Initial logical pinout:

| Pin | Net | Purpose |
|---|---|---|
| 1 | `GND` | Charge/program ground. |
| 2 | `V5_CHG` | Charger input. |
| 3 | `SWDIO` | Firmware upload. |
| 4 | `SWDCLK` | Firmware upload. |
| 5 | `RESET_N` | Programmer reset control. |
| 6 | `VREF` | Programmer target reference. |

Initial physical layout for tscircuit:

```text
P1 GND      P2 V5_CHG
P3 SWDIO    P4 SWDCLK
P5 RESET_N  P6 VREF
```

The actual pad size, spacing, height/profile, and keying are mechanical decisions. The first board can use placeholder rectangular pads, then revise after charger geometry is chosen.

Wearable-side contacts should be exposed contact pads, not normal paste-aperture SMT pads. Use ENIG for early prototypes if that is the easiest board-house option. Use hard gold over nickel for production-style contact durability. In both cases, specify no solder paste on the exposed contacts, controlled solder-mask openings, rounded pad corners where possible, and final spacing review for sweat/water exposure.

The final charger/device interface should preserve this stackup intent:

```text
charger outer lip / metal face sits proud
  -> recessed spring contacts inside charger head
  -> wearable-side gold contacts/pads mate under magnetic force
```

The charger-side spring contacts should not protrude past the protective face/lip when unmated.

## Power Architecture

Use a single-cell LiPo architecture.

Current first-board assumption: use a protected 1S LiPo pack or protected cell. This keeps the first wearable PCB simpler. If the chosen cell is unprotected, add cell protection on the PCB.

Chosen battery direction: custom high-rate LP501230-class protected 1S LiPo pouch with a 10 k NTC lead. Target mechanical envelope is about 5.0 mm x 12.0 mm x 31.0 mm, about 145 mAh, with PCM and three leads: `VBAT`, `BAT_NTC`, and `GND`.

Do not use a standard low-discharge LP501230 pack without checking current rating. Standard LP501230 packs fit well but are commonly rated around 145 mA max continuous discharge, which is not enough margin for the selected aggressive wake motor. Require a high-rate custom pack or PCM configuration that supports at least 300 mA continuous system/motor load and at least 500 mA pulse load.

Preferred main power flow:

```text
J_POGO V5_CHG
  -> input fuse
  -> input ESD / protection
  -> BQ21061 charger/power path
  -> VSYS
  -> nRF52840 + sensors + motor drivers

Protected LiPo pack
  -> VBAT
  -> BQ21061 battery pin
  -> MAX17048 fuel gauge
```

Use `VSYS` as the main system rail unless the final BQ21061 reference design requires a different naming/connection detail.

Expose `VREF` from the MCU logic supply used by SWD. For the first board, tie `VREF` to `VDD_NRF`.

The dock must not present raw always-on 5 V directly to the wearable contact face. Use a dock-side current-limited load switch path:

```text
USB_VBUS
  -> resettable input fuse
  -> TPS2553 current-limited load switch
  -> V5_POGO contact
```

Default first-pass behavior: keep `POGO_EN` pulled down so `V5_POGO` is off until the dock intentionally enables it. Feed the switch fault output back to the RP2040.

Default charge-current target: 50 mA for the first electronics pass. This stays below the common 0.5C limit for a 145 mAh LP501230-class pack, keeps thermal load lower in a sealed product, and is still fast enough for an overnight/desk charger.

Default dock-side pogo current-limit setting: `R_POGO_ILIM = 49.9 kOhm` on the TPS2553. TI's TPS255x datasheet gives a 475 mA minimum, 520 mA typical, and 565 mA maximum current-limit threshold for `R_ILIM = 49.9 kOhm`. This gives margin above the 50 mA charger current plus active-system and motor transients while still limiting exposed-contact fault energy. Revisit after final contact geometry and wet-short testing.

## nRF52840 Support Network

Use Nordic nRF52840-QIAA circuit configuration no. 4 as the baseline:

- `VDDH` supplied from the battery/power-path rail.
- `VDD` not externally supplied as the primary input.
- `EXTSUPPLY` enabled.
- Both `DCDCEN0` and `DCDCEN1` enabled.
- USB support present in the reference network.
- NFC not used in this electronics pass.

The wearable tscircuit sketch includes the regulator/reference network shape:

- `VDDH` from `VSYS`.
- `DCCH` through `L_NRF_REG0` to `VDD_NRF`.
- `DCC` through a 15 nH RF/regulator inductor and 10 uH regulator inductor chain to the shared `DEC4`/`DEC6` node.
- Dedicated `DEC1`, `DEC2`, `DEC3`, `DEC4`/`DEC6`, `DEC5`, and `DECUSB` capacitors.
- Local bulk and high-frequency decoupling on `VDD_NRF`.

Use these confirmed Nordic configuration-no.-4 values as the first-pass values:

| Reference role | Value |
|---|---|
| 32 MHz / 32.768 kHz crystal load capacitors | 12 pF |
| RF shunt capacitor C3 | 0.8 pF |
| RF shunt capacitor C4 | 0.5 pF |
| Main local decoupling C5/C7/C8/C12 | 100 nF |
| Bulk caps C6/C20/C19/C21 | 4.7 uF |
| RF/reference capacitor C9 | 820 pF |
| DEC3-style reference cap C11 | 100 pF |
| DEC4/DEC6 caps C14/C15 | 1.0 uF |
| DEC5 cap C16 | 47 nF |
| RF series inductor L1 | 4.7 nH |
| DCDC inductor L2 | 10 uH, 0603, 50 mA minimum IDC |
| DCC series inductor L3 | 15 nH, 0402 |
| DCCH inductor L4 | 10 uH, 0603, 80 mA minimum IDC |

Before fab, map the tscircuit component names one-for-one to the Nordic reference designators, pick exact capacitor/inductor MPNs, and copy Nordic's reference placement/return-current rules. The current file captures the circuit intent and value class; it is not yet a verified RF/regulator layout.

## Wearable Components

These are the parts to use for the first wearable PCB unless a footprint/import issue forces an alternate.

| Ref | Function | Part | JLC ID | tscircuit search/import query | Notes |
|---|---|---|---|---|---|
| `U_MCU` | BLE MCU | `NRF52840-QIAA-R` | `C190794` | `NRF52840-QIAA-R` | Main MCU/radio. |
| `U_CHG` | Charger / power path | `BQ21061YFPR` | `C2869893` | `BQ21061YFPR` | 1-cell Li-ion charger with power path. |
| `U_FG` | Fuel gauge | `MAX17048G+T10` | `C2682616` | `MAX17048G` | I2C fuel gauge across `VBAT`. |
| `U_MOT1` | Motor driver 1 | `DRV8212PDSGR` | `C5208051` | `DRV8212PDSGR` | Required ERM motor driver. |
| `U_MOT2` | Motor driver 2 | `DRV8212PDSGR` | `C5208051` | `DRV8212PDSGR` | Optional second motor channel footprint. |
| `M1` | Vibration motor 1 | `Vybronics VZ7AL2B169208T` | N/A | custom motor pads/connector | Required wake motor; 7 mm diameter, 16.5 mm body, 3 V, 180 mA typical, 250 mA max, 5.10 Grms. |
| `M2` | Vibration motor 2 | same family as `M1` if space allows | N/A | custom motor pads/connector | Test/population option only; do not depend on it for the baseline product. |
| `U_ACC` | Accelerometer | `LIS2DW12TR` | `C189624` | `LIS2DW12TR` | I2C motion input. |
| `ANT1` | 2.4 GHz antenna | `2450AT18B100E` | `C2917717` | `2450AT18B100E` | Place at board edge with RF keepout. |
| `Y1` | HF crystal | `NX2016SA-32MHZ-STD-CZS-5` | `C843260` | `NX2016SA-32MHZ-STD-CZS-5` | nRF 32 MHz crystal. |
| `Y2` | LF crystal | `ABS07-32.768KHZ-T` | `C130253` | `ABS07-32.768KHZ-T` | Low-frequency clock. |
| `TH1` | Battery thermistor | `NCP15XH103F03RC` | `C77131` | `NCP15XH103F03RC` | Connect to charger temperature input. |
| `SW1` | Button | `KSC241GLFS` | `C221730` | `KSC241GLFS` | Wake/action button. |
| `D_ESD1` | 4-channel ESD | `TPD4E05U06DQAR` | `C138714` | `TPD4E05U06DQAR` | Protect SWD/debug/contact lines. |
| `D_ESD2` | 5 V input ESD | `PESD5V0S1BBN` | `C314264` | `PESD5V0S1BBN` | Protect exposed `V5_CHG`. |
| `F1` | Input resettable fuse | `MF-PSMF050X-2` | `C116170` | `MF-PSMF050X-2` | Series protection from `V5_CHG` to `V5_PROT`. |

### Passive / Generic Components

Add these during schematic creation:

- Decoupling capacitors for every IC power pin per datasheet/reference design.
- Bulk capacitance on `VSYS`, near motor drivers, and near charger input.
- nRF52840 RF matching network between MCU RF pin and `ANT1`.
- Crystal load capacitors for `Y1` and `Y2` based on selected crystal load capacitance and Nordic reference design.
- I2C pullups on `I2C_SCL` and `I2C_SDA` to `VDD_IO`.
- Button pullup/pulldown as needed if not using only the MCU internal pull.
- Motor output snubbing/EMI components if needed after testing.

## Wearable Placement Guidance

Use this placement priority in the first tscircuit layout:

1. `ANT1` at a board edge with copper keepout under/around the antenna per antenna datasheet.
2. `U_MCU`, `Y1`, RF matching passives, and `ANT1` close together.
3. `J_POGO`, `F1`, `D_ESD2`, and `U_CHG` near the charge-pad edge.
4. Battery connector/pads near `U_CHG` and `U_FG`.
5. `U_MOT1`, optional `U_MOT2`, and motor pads/connectors near the motor exits.
6. `U_ACC` near the board center if possible.
7. `SW1` at the edge/location implied by the button mechanics.

Keep high-current motor routing away from the antenna, RF matching network, and crystals.

## Battery Connection

For the first tscircuit PCB, represent the battery as a 3-pin solder-pad set named `J_BAT`. The battery is a soldered protected pack, not a removable board connector.

| Pin | Net |
|---|---|
| 1 | `VBAT` |
| 2 | `BAT_NTC` |
| 3 | `GND` |

## Vibration Motor Direction

The vibration system should be designed around waking force, not premium haptic feel. Use one `Vybronics VZ7AL2B169208T` high-force encapsulated ERM motor as the baseline. Keep the second motor driver/channel available as a prototype/test option until wrist testing proves whether one motor is enough.

Avoid making the first wake-strength decision around tiny low-current coin motors. They are attractive for thin wearables, but the selected VZ7 motor has much higher stated vibration force than the earlier 12 mm coin-motor candidate.

The battery, motor driver, power path, and layout should tolerate motor startup current and repeated alarm bursts without brownout. Place motor current routing away from the RF antenna, crystals, and nRF reference network.

## Motor Connection

For the first tscircuit PCB, represent each motor as solder pads. Soldered motor leads are acceptable for V1 and are preferred over a small connector because they save space and reduce intermittent-contact risk.

Motor 1:

| Pin | Net |
|---|---|
| 1 | `MOTOR1_OUT_P` |
| 2 | `MOTOR1_OUT_N` |

Motor 2 optional footprint:

| Pin | Net |
|---|---|
| 1 | `MOTOR2_OUT_P` |
| 2 | `MOTOR2_OUT_N` |

## Charger / Programmer Dock Specifics

### Basic Charger

A basic charger only needs to contact:

- `V5_CHG`
- `GND`

For a rough prototype, this can be a cable/contact assembly. For a repeatable product-style charger, model a tiny charger PCB or flex with:

- USB/power cable input.
- Two populated pogo contacts.
- Optional input ESD and fuse.
- Mechanical holes/keepouts for magnets or contact carrier.

### Developer / Programmer Dock

The developer/programmer dock uses all six contacts.

Recommended dock architecture:

```text
USB-C
  -> USB ESD
  -> RP2040 USB/SWD bridge
  -> SWD interface referenced to target VREF
  -> dock-side current-limited V5_POGO switch
  -> magnetic pogo contacts
```

Current dock-side component candidates:

| Ref | Function | Part | JLC ID | tscircuit search/import query | Notes |
|---|---|---|---|---|---|
| `J_USB` | USB-C receptacle | `GCT USB4105-GF-A` | `C3020560` | `USB4105-GF-A` | USB 2.0 Type-C receptacle with through-hole shell stakes, 20,000 mating-cycle rating, and 5 A rating; oversized for this dock current, which is good for durability. |
| `U_DBG` | Debug bridge MCU | `RP2040` | `C2040` | `RP2040` | Candidate open USB/SWD bridge controller. |
| `U_FLASH` | RP2040 flash | `W25Q16JVSNIQ` | `C2456211` | `W25Q16JVSNIQ` | Required RP2040 external flash. |
| `U_LDO` | Dock 3.3 V regulator | `AP2112K-3.3TRG1` | `C51118` | `AP2112K-3.3` | Dock-side logic rail. |
| `D_USB_ESD` | USB ESD | `USBLC6-2P6` | `C15999` | `USBLC6-2P6` | Protect USB D+/D-. |
| `U_LVL_SWDIO` | SWDIO level shifting | `SN74AXC1T45DCKR` | `C2677392` | `SN74AXC1T45DCKR` | Single-bit translator with RP2040-controlled direction for SWDIO turnaround. |
| `U_LVL_SWCLK` | SWCLK level shifting | `SN74AXC1T45DCKR` | `C2677392` | `SN74AXC1T45DCKR` | Single-bit translator with fixed dock-to-target direction. |
| `Q_RESET_OD` | Target reset pulldown | `L2N7002SLLT1G` | `C22446827` | `L2N7002SLLT1G` | Open-drain-style reset pull to target ground. |
| `U_POGO_SW` | Pogo 5 V load switch | `TPS2553DBVR` | `C55266` | `TPS2553DBVR` | Current-limited switch for exposed dock power contact; first pass uses 49.9 kOhm ILIM for about 520 mA typical. |
| `JP_BOOTSEL` | RP2040 recovery service pads | custom two-pad jumper | N/A | custom footprint | Short to enter RP2040 BOOTSEL recovery. |
| `JP_RUN` | RP2040 reset service pads | custom two-pad jumper | N/A | custom footprint | Short to reset/recover the dock controller. |
| `J_POGO_DOCK` | Recessed pogo contact assembly | Harwin P70 or Mill-Max spring contacts | N/A | custom footprint | Charger-side spring contacts recessed inside a premium magnetic connector head. |

SWD direction handling:

- `SWCLK` is dock-to-target only.
- `SWDIO` is bidirectional and needs explicit direction control from the RP2040.
- `RESET_N_TGT` should be pulled low through `Q_RESET_OD`, not driven high by the dock.
- `VREF_TGT` powers the target side of the SWD translators so the dock respects the wearable logic level.

Dock recovery:

- RP2040 flash has a pull-up on chip select and local decoupling.
- BOOTSEL and RUN are exposed as compact service pads, not full pushbuttons.
- USB-C shell pins are tied to dock ground in the tscircuit sketch.

Service pads mean small internal or underside copper pads used only for development/recovery. To recover a broken dock firmware image, a developer can short the BOOTSEL pad pair or RUN pad pair with tweezers, a pogo fixture, or a small jig while plugging the dock into USB. They are not normal user controls and do not need to be accessible in daily use.

## Open Electronics Decisions

- Exact magnetic pad size, pitch, and mechanical keying.
- Exact custom high-rate LP501230-class battery supplier/quote after enclosure stackup confirms cell volume.
- Exact capacitor/inductor MPNs for the nRF52840 reference network after picking preferred suppliers and checking DC bias, Q, tolerance, and package availability.
- Final solder-mask geometry and hard-gold/ENIG fabrication notes for the exposed contacts.
