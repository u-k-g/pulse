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

Wearable-side contacts should be exposed contact pads, not normal paste-aperture SMT pads. Manufacturing notes should call out ENIG or hard-gold finish, no solder paste on exposed contacts, controlled solder-mask openings, and final spacing review for sweat/water exposure.

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

## nRF52840 Support Network

The wearable tscircuit sketch includes the nRF52840 regulator/reference network shape:

- `VDDH` from `VSYS`.
- `DCCH` through `L_NRF_REG0` to `VDD_NRF`.
- `DCC` through `L_NRF_REG1` to the shared `DEC4`/`DEC6` node.
- Dedicated `DEC1`, `DEC2`, `DEC3`, `DEC4`/`DEC6`, `DEC5`, and `DECUSB` capacitors.
- Local bulk and high-frequency decoupling on `VDD_NRF`.

Before fab, verify the exact inductor values, capacitor values, and part numbers against the selected Nordic reference schematic and final regulator mode.

## Wearable Components

These are the parts to use for the first wearable PCB unless a footprint/import issue forces an alternate.

| Ref | Function | Part | JLC ID | tscircuit search/import query | Notes |
|---|---|---|---|---|---|
| `U_MCU` | BLE MCU | `NRF52840-QIAA-R` | `C190794` | `NRF52840-QIAA-R` | Main MCU/radio. |
| `U_CHG` | Charger / power path | `BQ21061YFPR` | `C2869893` | `BQ21061YFPR` | 1-cell Li-ion charger with power path. |
| `U_FG` | Fuel gauge | `MAX17048G+T10` | `C2682616` | `MAX17048G` | I2C fuel gauge across `VBAT`. |
| `U_MOT1` | Motor driver 1 | `DRV8212PDSGR` | `C5208051` | `DRV8212PDSGR` | Required ERM motor driver. |
| `U_MOT2` | Motor driver 2 | `DRV8212PDSGR` | `C5208051` | `DRV8212PDSGR` | Optional second motor channel footprint. |
| `M1` | Vibration motor 1 | `Vybronics VC1234B016F` | N/A | custom motor pads/connector | Required ERM motor. |
| `M2` | Vibration motor 2 | `Vybronics VC1234B016F` | N/A | custom motor pads/connector | Optional second ERM motor. |
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

For the first tscircuit PCB, represent the battery as a 2-pin connector or solder-pad pair named `J_BAT`.

Pinout:

| Pin | Net |
|---|---|
| 1 | `VBAT` |
| 2 | `GND` |

If using a battery pack with a separate thermistor lead, represent it as `J_BAT_THERM` or as a 3-pin `J_BAT`:

| Pin | Net |
|---|---|
| 1 | `VBAT` |
| 2 | `BAT_NTC` |
| 3 | `GND` |

## Motor Connection

For the first tscircuit PCB, represent each motor as solder pads or a small 2-pin connector.

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
| `J_USB` | USB-C receptacle | builtin `standard="usb_c"` or `USB4105-GF-A` | `C3020560` | `USB4105-GF-A` | Prefer builtin `<connector standard="usb_c" />` unless exact footprint is needed. |
| `U_DBG` | Debug bridge MCU | `RP2040` | `C2040` | `RP2040` | Candidate open USB/SWD bridge controller. |
| `U_FLASH` | RP2040 flash | `W25Q16JVSNIQ` | `C2456211` | `W25Q16JVSNIQ` | Required RP2040 external flash. |
| `U_LDO` | Dock 3.3 V regulator | `AP2112K-3.3TRG1` | `C51118` | `AP2112K-3.3` | Dock-side logic rail. |
| `D_USB_ESD` | USB ESD | `USBLC6-2P6` | `C15999` | `USBLC6-2P6` | Protect USB D+/D-. |
| `U_LVL_SWDIO` | SWDIO level shifting | `SN74AXC1T45DCKR` | TBD | `SN74AXC1T45DCKR` | Single-bit translator with RP2040-controlled direction for SWDIO turnaround. |
| `U_LVL_SWCLK` | SWCLK level shifting | `SN74AXC1T45DCKR` | TBD | `SN74AXC1T45DCKR` | Single-bit translator with fixed dock-to-target direction. |
| `Q_RESET_OD` | Target reset pulldown | `L2N7002SLLT1G` | TBD | `L2N7002SLLT1G` | Open-drain-style reset pull to target ground. |
| `U_POGO_SW` | Pogo 5 V load switch | `TPS2553DBVR` | TBD | `TPS2553DBVR` | Current-limited switch for exposed dock power contact. |
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

## Open Electronics Decisions

- Wearable board outline and exact dimensions.
- Exact magnetic pad size, pitch, and mechanical keying.
- Exact battery pack/cell and whether it includes protection.
- One or two populated motors in the first assembled prototype.
- Motor solder pads versus small motor connectors.
- Exact USB-C connector manufacturer part number for the dock.
- Exact TPS2553 current-limit setting after choosing charge current, contact rating, and cable/USB power budget.
- Final nRF52840 regulator-mode reference values and inductor/capacitor part numbers.
- Final exposed-contact finish, solder-mask geometry, and no-paste fabrication instructions.
