import React from "react"
import { NRF52840_QIAA_R } from "./imports/NRF52840_QIAA_R"
import { BQ21061YFPR } from "./imports/BQ21061YFPR"
import { MAX17048G_T10 } from "./imports/MAX17048G_T10"
import { DRV8212PDSGR } from "./imports/DRV8212PDSGR"
import { LIS2DW12TR } from "./imports/LIS2DW12TR"
import { A_2450AT18B100E } from "./imports/A_2450AT18B100E"
import { NX2016SA_32MHZ_STD_CZS_5 } from "./imports/NX2016SA_32MHZ_STD_CZS_5"
import { ABS07_32_768KHZ_T } from "./imports/ABS07_32_768KHZ_T"
import { NCP15XH103F03RC } from "./imports/NCP15XH103F03RC"
import { KSC241GLFS } from "./imports/KSC241GLFS"
import { TPD4E05U06DQAR } from "./imports/TPD4E05U06DQAR"
import { PESD5V0S1BBN } from "./imports/PESD5V0S1BBN"
import { MF_PSMF050X_2 } from "./imports/MF_PSMF050X_2"

const SixPadPogo = (props: any) => (
  <connector
    pinLabels={{
      pin1: ["GND"],
      pin2: ["V5_CHG"],
      pin3: ["SWDIO"],
      pin4: ["SWDCLK"],
      pin5: ["RESET_N"],
      pin6: ["VREF"],
    }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="3.4mm" width="1.15mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="3.4mm" width="1.15mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="-1.4mm" pcbY="0mm" width="1.15mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="1.4mm" pcbY="0mm" width="1.15mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="-1.4mm" pcbY="-3.4mm" width="1.15mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="1.4mm" pcbY="-3.4mm" width="1.15mm" height="1.6mm" shape="rect" />
        <silkscreenrect pcbX="0mm" pcbY="0mm" width="6mm" height="9.6mm" />
      </footprint>
    }
    {...props}
  />
)

const TwoPadConnector = (props: any) => (
  <connector
    pinLabels={{
      pin1: ["P"],
      pin2: ["N"],
    }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1"]} pcbX="-0.8mm" pcbY="0mm" width="1.2mm" height="1.8mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="0.8mm" pcbY="0mm" width="1.2mm" height="1.8mm" shape="rect" />
      </footprint>
    }
    {...props}
  />
)

const ThreePadBattery = (props: any) => (
  <connector
    pinLabels={{
      pin1: ["VBAT"],
      pin2: ["BAT_NTC"],
      pin3: ["GND"],
    }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1"]} pcbX="-1.6mm" pcbY="0mm" width="1.1mm" height="1.8mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="0mm" pcbY="0mm" width="1.1mm" height="1.8mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="1.6mm" pcbY="0mm" width="1.1mm" height="1.8mm" shape="rect" />
      </footprint>
    }
    {...props}
  />
)

export default () => (
  <board width="58mm" height="26mm" layers={4}>
    <schematicsection name="Power" displayName="Power" />
    <schematicsection name="MCU_RF" displayName="MCU / RF" />
    <schematicsection name="Vibration" displayName="Vibration" />
    <schematicsection name="Motion_Button" displayName="Motion / Button" />
    <schematicsection name="Charge_Program_Interface" displayName="Charge / Program Interface" />

    <SixPadPogo name="J_POGO" pcbX="-25mm" pcbY="0mm" schX={-14} schY={0} schSectionName="Charge_Program_Interface" />
    <MF_PSMF050X_2 name="F1" pcbX="-20.2mm" pcbY="4.8mm" schX={-10} schY={2} schSectionName="Charge_Program_Interface" />
    <PESD5V0S1BBN name="D_ESD_V5" pcbX="-20.2mm" pcbY="1.8mm" schX={-10} schY={0} schSectionName="Charge_Program_Interface" />
    <TPD4E05U06DQAR name="D_ESD_SWD" pcbX="-20.2mm" pcbY="-2.4mm" schX={-10} schY={-2} schSectionName="Charge_Program_Interface" />

    <BQ21061YFPR name="U_CHG" pcbX="-14mm" pcbY="7mm" schX={-4.8} schY={2} schSectionName="Power" />
    <ThreePadBattery name="J_BAT" pcbX="-7.3mm" pcbY="11mm" schX={-1} schY={5} schSectionName="Power" />
    <MAX17048G_T10 name="U_FG" pcbX="-1.2mm" pcbY="10.8mm" schX={3} schY={5} schSectionName="Power" />
    <NCP15XH103F03RC name="TH1" pcbX="-10.3mm" pcbY="11.8mm" schX={-0.5} schY={7.4} schSectionName="Power" />

    <NRF52840_QIAA_R name="U_MCU" pcbX="-3mm" pcbY="0mm" schX={1} schY={0} schSectionName="MCU_RF" />
    <NX2016SA_32MHZ_STD_CZS_5 name="Y1_32M" pcbX="5.8mm" pcbY="-5.1mm" schX={8.5} schY={-2} schSectionName="MCU_RF" />
    <ABS07_32_768KHZ_T name="Y2_32K" pcbX="5.8mm" pcbY="5.2mm" schX={8.5} schY={2} schSectionName="MCU_RF" />
    <A_2450AT18B100E name="ANT1" pcbX="25.8mm" pcbY="0mm" pcbRotation={90} schX={13} schY={0} schSectionName="MCU_RF" />
    <capacitor name="C_RF_SHUNT1" capacitance="0.8pF" footprint="0402" pcbX="14.8mm" pcbY="-1.4mm" schX={10.8} schY={-1} schSectionName="MCU_RF" />
    <inductor name="L_RF_SERIES" inductance="3.9nH" footprint="0402" pcbX="17mm" pcbY="0mm" schX={10.8} schY={0} schSectionName="MCU_RF" />
    <capacitor name="C_RF_SHUNT2" capacitance="DNP" footprint="0402" pcbX="19.3mm" pcbY="-1.4mm" schX={10.8} schY={1} schSectionName="MCU_RF" doNotPlace />
    <pcbnoterect pcbX="25.5mm" pcbY="0mm" width="7mm" height="12mm" strokeWidth="0.15mm" color="#d97706" />
    <fabricationnotetext text="ANTENNA KEEPOUT: NO COPPER / METAL / MOTOR ROUTES" pcbX="18.8mm" pcbY="-7.1mm" fontSize="0.7mm" anchorAlignment="center" />

    <LIS2DW12TR name="U_ACC" pcbX="4.5mm" pcbY="0mm" schX={3.1} schY={7.2} schSectionName="Motion_Button" />
    <KSC241GLFS name="SW1" pcbX="-16.5mm" pcbY="-9.3mm" schX={6} schY={7.2} schSectionName="Motion_Button" />

    <DRV8212PDSGR name="U_MOT1" pcbX="10.8mm" pcbY="8.3mm" schX={-1.6} schY={-7} schSectionName="Vibration" />
    <TwoPadConnector name="J_MOT1" pcbX="17.2mm" pcbY="10.6mm" schX={2.8} schY={-7} schSectionName="Vibration" />
    <DRV8212PDSGR name="U_MOT2" pcbX="10.8mm" pcbY="-8.3mm" schX={-1.6} schY={-10} schSectionName="Vibration" />
    <TwoPadConnector name="J_MOT2" pcbX="17.2mm" pcbY="-10.6mm" schX={2.8} schY={-10} schSectionName="Vibration" />

    <capacitor name="C_IN" capacitance="1uF" footprint="0402" pcbX="-17.1mm" pcbY="7.2mm" schX={-6.2} schY={4.2} schSectionName="Power" />
    <capacitor name="C_PMID" capacitance="22uF" footprint="0805" pcbX="-13.9mm" pcbY="10.6mm" schX={-2} schY={3.2} schSectionName="Power" />
    <capacitor name="C_BAT" capacitance="1uF" footprint="0402" pcbX="-4mm" pcbY="9.1mm" schX={-0.2} schY={4.2} schSectionName="Power" />
    <capacitor name="C_CHG_VDD" capacitance="2.2uF" footprint="0402" pcbX="-11.2mm" pcbY="6.6mm" schX={-2.4} schY={1} schSectionName="Power" />
    <capacitor name="C_NRF_BULK" capacitance="4.7uF" footprint="0603" pcbX="-9.7mm" pcbY="-3.9mm" schX={2.8} schY={-4.2} schSectionName="MCU_RF" />
    <capacitor name="C_NRF_DEC1" capacitance="100nF" footprint="0402" pcbX="-9.7mm" pcbY="-1.7mm" schX={4.1} schY={-4.2} schSectionName="MCU_RF" />
    <capacitor name="C_NRF_DEC2" capacitance="100nF" footprint="0402" pcbX="-9.7mm" pcbY="-0.3mm" schX={5.4} schY={-4.2} schSectionName="MCU_RF" />
    <capacitor name="C_NRF_VDD_1U" capacitance="1uF" footprint="0402" pcbX="-9.7mm" pcbY="1.1mm" schX={6.7} schY={-4.2} schSectionName="MCU_RF" />
    <inductor name="L_NRF_REG0" inductance="10uH" footprint="0402" pcbX="-0.4mm" pcbY="-8.9mm" schX={3.8} schY={-5.4} schSectionName="MCU_RF" />
    <inductor name="L_NRF_REG1" inductance="15nH" footprint="0402" pcbX="-5.6mm" pcbY="-6.2mm" schX={5.4} schY={-5.4} schSectionName="MCU_RF" />
    <capacitor name="C_DEC1" capacitance="100nF" footprint="0402" pcbX="-7.7mm" pcbY="4.9mm" schX={2.7} schY={-6.6} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_DEC2" capacitance="100nF" footprint="0402" pcbX="-7.7mm" pcbY="6.3mm" schX={4.0} schY={-6.6} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_DEC3" capacitance="100pF" footprint="0402" pcbX="-1.0mm" pcbY="6.9mm" schX={5.3} schY={-6.6} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_DEC4_6" capacitance="1uF" footprint="0402" pcbX="-5.7mm" pcbY="-4.8mm" schX={6.6} schY={-6.6} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_DEC5" capacitance="1pF" footprint="0402" pcbX="0.9mm" pcbY="5.4mm" schX={7.9} schY={-6.6} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_DECUSB" capacitance="4.7uF" footprint="0402" pcbX="-0.4mm" pcbY="-6.9mm" schX={9.2} schY={-6.6} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_32M_X1" capacitance="12pF" footprint="0402" pcbX="3.8mm" pcbY="-7.5mm" schX={7.2} schY={-3.3} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_32M_X2" capacitance="12pF" footprint="0402" pcbX="7.8mm" pcbY="-7.5mm" schX={9.8} schY={-3.3} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_32K_X1" capacitance="12pF" footprint="0402" pcbX="3.8mm" pcbY="9.3mm" schX={7.2} schY={3.3} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_32K_X2" capacitance="12pF" footprint="0402" pcbX="7.8mm" pcbY="9.3mm" schX={9.8} schY={3.3} schOrientation="vertical" schSectionName="MCU_RF" />
    <capacitor name="C_MOT1_VM" capacitance="10uF" footprint="0805" pcbX="16.5mm" pcbY="7.2mm" schX={-6.1} schY={-7} schSectionName="Vibration" />
    <capacitor name="C_MOT1_VCC" capacitance="100nF" footprint="0402" pcbX="6.4mm" pcbY="7.4mm" schX={-6.1} schY={-8.2} schSectionName="Vibration" />
    <capacitor name="C_MOT2_VM" capacitance="10uF" footprint="0805" pcbX="16.5mm" pcbY="-7.2mm" schX={-6.1} schY={-10} schSectionName="Vibration" />
    <capacitor name="C_MOT2_VCC" capacitance="100nF" footprint="0402" pcbX="7.4mm" pcbY="-8.6mm" schX={-6.1} schY={-11.2} schSectionName="Vibration" />
    <resistor name="R_I2C_SCL" resistance="4.7k" footprint="0402" pcbX="2.1mm" pcbY="7.4mm" schX={1.8} schY={4.3} schSectionName="Motion_Button" />
    <resistor name="R_I2C_SDA" resistance="4.7k" footprint="0402" pcbX="4.4mm" pcbY="7.4mm" schX={3.1} schY={4.3} schSectionName="Motion_Button" />
    <resistor name="R_BTN_PULL" resistance="100k" footprint="0402" pcbX="-8.8mm" pcbY="-11.2mm" schX={8.3} schY={7.2} schSectionName="Motion_Button" />
    <resistor name="R_CHG_PU" resistance="10k" footprint="0402" pcbX="-13.2mm" pcbY="-2.6mm" schX={-3.2} schY={0} schSectionName="Power" />
    <resistor name="R_TS_PAR" resistance="10k" footprint="0402" pcbX="-13.2mm" pcbY="12.2mm" schX={-2.0} schY={7.4} schSectionName="Power" />
    <resistor name="R_RESET_PULL" resistance="100k" footprint="0402" pcbX="-18.8mm" pcbY="-4.8mm" schX={-9.2} schY={-4.3} schSectionName="Charge_Program_Interface" />
    <resistor name="R_VREF_SENSE" resistance="100" footprint="0402" pcbX="-25.2mm" pcbY="-5.8mm" schX={-11.5} schY={-4.3} schSectionName="Charge_Program_Interface" />
    <fabricationnotetext text="POGO CONTACTS: EXPOSED ENIG/HARD-GOLD, NO SOLDER PASTE" pcbX="-16.3mm" pcbY="-12.2mm" fontSize="0.7mm" anchorAlignment="center" />

    <trace from="J_POGO.V5_CHG" to="F1.pin1" />
    <trace from="F1.pin2" to="net.V5_PROT" />
    <trace from="J_POGO.GND" to="net.GND" />
    <trace from="D_ESD_V5.pin1" to="J_POGO.V5_CHG" />
    <trace from="D_ESD_V5.pin2" to="net.GND" />
    <trace from="D_ESD_SWD.GND1" to="net.GND" />
    <trace from="D_ESD_SWD.GND2" to="net.GND" />
    <trace from="D_ESD_SWD.D1_POS" to="net.SWDIO" />
    <trace from="D_ESD_SWD.D2_POS" to="net.SWDCLK" />
    <trace from="D_ESD_SWD.D1_NEG" to="net.RESET_N" />
    <trace from="D_ESD_SWD.D2_NEG" to="net.VREF_PAD" />

    <trace from="U_CHG.IN" to="net.V5_PROT" />
    <trace from="U_CHG.GND" to="net.GND" />
    <trace from="U_CHG.PMID" to="net.VSYS" />
    <trace from="U_CHG.BAT" to="net.VBAT" />
    <trace from="U_CHG.VIO" to="net.VDD_NRF" />
    <trace from="U_CHG.VDD" to="net.CHG_VDD" />
    <trace from="U_CHG.SCL" to="net.I2C_SCL" />
    <trace from="U_CHG.SDA" to="net.I2C_SDA" />
    <trace from="U_CHG.INT" to="net.CHG_STAT" />
    <trace from="U_CHG.TS" to="net.BAT_NTC" />
    <trace from="U_CHG.MR" to="net.BTN_WAKE" />
    <trace from="U_CHG.CE" to="net.GND" />
    <trace from="U_CHG.LP" to="net.VDD_NRF" />
    <trace from="U_CHG.LS_LDO" to="net.VSYS" />
    <trace from="U_CHG.VINLS" to="net.VSYS" />
    <trace from="J_BAT.VBAT" to="net.VBAT" />
    <trace from="J_BAT.BAT_NTC" to="net.BAT_NTC" />
    <trace from="J_BAT.GND" to="net.GND" />
    <trace from="TH1.pin1" to="net.BAT_NTC" />
    <trace from="TH1.pin2" to="net.GND" />
    <trace from="R_TS_PAR.pin1" to="net.BAT_NTC" />
    <trace from="R_TS_PAR.pin2" to="net.GND" />
    <trace from="U_FG.CELL" to="net.VBAT" />
    <trace from="U_FG.VDD" to="net.VBAT" />
    <trace from="U_FG.GND" to="net.GND" />
    <trace from="U_FG.SCL" to="net.I2C_SCL" />
    <trace from="U_FG.SDA" to="net.I2C_SDA" />

    <trace from="U_MCU.VDDH" to="net.VSYS" />
    <trace from="U_MCU.A22" to="net.VDD_NRF" />
    <trace from="U_MCU.B1" to="net.VDD_NRF" />
    <trace from="U_MCU.W1" to="net.VDD_NRF" />
    <trace from="U_MCU.AD14" to="net.VDD_NRF" />
    <trace from="U_MCU.AD23" to="net.VDD_NRF" />
    <trace from="U_MCU.VSS" to="net.GND" />
    <trace from="U_MCU.VSS_PA" to="net.GND" />
    <trace from="U_MCU.DCCH" to="L_NRF_REG0.pin1" />
    <trace from="L_NRF_REG0.pin2" to="net.VDD_NRF" />
    <trace from="U_MCU.DCC" to="L_NRF_REG1.pin1" />
    <trace from="L_NRF_REG1.pin2" to="net.NRF_DEC4_6" />
    <trace from="U_MCU.DEC1" to="net.NRF_DEC1" />
    <trace from="U_MCU.DEC2" to="net.NRF_DEC2" />
    <trace from="U_MCU.DEC3" to="net.NRF_DEC3" />
    <trace from="U_MCU.DEC4" to="net.NRF_DEC4_6" />
    <trace from="U_MCU.DEC6" to="net.NRF_DEC4_6" />
    <trace from="U_MCU.DEC5" to="net.NRF_DEC5" />
    <trace from="U_MCU.DECUSB" to="net.NRF_DECUSB" />
    <trace from="U_MCU.SWDIO" to="net.SWDIO" />
    <trace from="U_MCU.SWDCLK" to="net.SWDCLK" />
    <trace from="U_MCU.RESET_N" to="net.RESET_N" />
    <trace from="J_POGO.SWDIO" to="net.SWDIO" />
    <trace from="J_POGO.SWDCLK" to="net.SWDCLK" />
    <trace from="J_POGO.RESET_N" to="net.RESET_N" />
    <trace from="J_POGO.VREF" to="net.VREF_PAD" />
    <trace from="R_RESET_PULL.pin1" to="net.RESET_N" />
    <trace from="R_RESET_PULL.pin2" to="net.VDD_NRF" />
    <trace from="R_VREF_SENSE.pin1" to="net.VREF_PAD" />
    <trace from="R_VREF_SENSE.pin2" to="net.VDD_NRF" />
    <trace from="Y1_32M.X1" to="U_MCU.XC1" />
    <trace from="Y1_32M.X2" to="U_MCU.XC2" />
    <trace from="Y1_32M.GND1" to="net.GND" />
    <trace from="Y1_32M.GND2" to="net.GND" />
    <trace from="Y2_32K.OSC1" to="U_MCU.P0_00_XL1" />
    <trace from="Y2_32K.OSC2" to="U_MCU.P0_01_XL2" />
    <trace from="C_32M_X1.pin1" to="U_MCU.XC1" />
    <trace from="C_32M_X1.pin2" to="net.GND" />
    <trace from="C_32M_X2.pin1" to="U_MCU.XC2" />
    <trace from="C_32M_X2.pin2" to="net.GND" />
    <trace from="C_32K_X1.pin1" to="U_MCU.P0_00_XL1" />
    <trace from="C_32K_X1.pin2" to="net.GND" />
    <trace from="C_32K_X2.pin1" to="U_MCU.P0_01_XL2" />
    <trace from="C_32K_X2.pin2" to="net.GND" />
    <trace from="U_MCU.ANT" to="C_RF_SHUNT1.pin1" />
    <trace from="C_RF_SHUNT1.pin1" to="L_RF_SERIES.pin1" />
    <trace from="C_RF_SHUNT1.pin2" to="net.GND" />
    <trace from="L_RF_SERIES.pin2" to="C_RF_SHUNT2.pin1" />
    <trace from="C_RF_SHUNT2.pin1" to="ANT1.FEED" />
    <trace from="C_RF_SHUNT2.pin2" to="net.GND" />

    <trace from="U_MCU.P0_13" to="net.I2C_SCL" />
    <trace from="U_MCU.P0_14" to="net.I2C_SDA" />
    <trace from="U_ACC.SCL" to="net.I2C_SCL" />
    <trace from="U_ACC.SDA" to="net.I2C_SDA" />
    <trace from="U_ACC.VDD" to="net.VDD_NRF" />
    <trace from="U_ACC.VDDIO" to="net.VDD_NRF" />
    <trace from="U_ACC.GND1" to="net.GND" />
    <trace from="U_ACC.GND2" to="net.GND" />
    <trace from="U_ACC.CS" to="net.VDD_NRF" />
    <trace from="U_ACC.RES" to="net.GND" />
    <trace from="U_ACC.INT1" to="net.ACC_INT1" />
    <trace from="U_MCU.P0_20" to="net.ACC_INT1" />
    <trace from="R_I2C_SCL.pin1" to="net.I2C_SCL" />
    <trace from="R_I2C_SCL.pin2" to="net.VDD_NRF" />
    <trace from="R_I2C_SDA.pin1" to="net.I2C_SDA" />
    <trace from="R_I2C_SDA.pin2" to="net.VDD_NRF" />
    <trace from="SW1.pin1" to="net.BTN_WAKE" />
    <trace from="SW1.pin2" to="net.GND" />
    <trace from="R_BTN_PULL.pin1" to="net.BTN_WAKE" />
    <trace from="R_BTN_PULL.pin2" to="net.VDD_NRF" />
    <trace from="U_MCU.P0_21" to="net.BTN_WAKE" />
    <trace from="R_CHG_PU.pin1" to="net.CHG_STAT" />
    <trace from="R_CHG_PU.pin2" to="net.VDD_NRF" />
    <trace from="U_MCU.P0_22" to="net.CHG_STAT" />

    <trace from="U_MOT1.VM" to="net.VSYS" width="0.35mm" />
    <trace from="U_MOT1.VCC" to="net.VDD_NRF" />
    <trace from="U_MOT1.GND" to="net.GND" />
    <trace from="U_MOT1.EP" to="net.GND" />
    <trace from="U_MOT1.IN1" to="U_MCU.P0_15" />
    <trace from="U_MOT1.IN2" to="U_MCU.P0_16" />
    <trace from="U_MOT1.nSLEEP" to="net.VDD_NRF" />
    <trace from="U_MOT1.OUT1" to="J_MOT1.P" width="0.35mm" />
    <trace from="U_MOT1.OUT2" to="J_MOT1.N" width="0.35mm" />
    <trace from="U_MOT2.VM" to="net.VSYS" width="0.35mm" />
    <trace from="U_MOT2.VCC" to="net.VDD_NRF" />
    <trace from="U_MOT2.GND" to="net.GND" />
    <trace from="U_MOT2.EP" to="net.GND" />
    <trace from="U_MOT2.IN1" to="U_MCU.P0_17" />
    <trace from="U_MOT2.IN2" to="U_MCU.P0_19" />
    <trace from="U_MOT2.nSLEEP" to="net.VDD_NRF" />
    <trace from="U_MOT2.OUT1" to="J_MOT2.P" width="0.35mm" />
    <trace from="U_MOT2.OUT2" to="J_MOT2.N" width="0.35mm" />

    <trace from="C_IN.pin1" to="net.V5_PROT" />
    <trace from="C_IN.pin2" to="net.GND" />
    <trace from="C_PMID.pin1" to="net.VSYS" />
    <trace from="C_PMID.pin2" to="net.GND" />
    <trace from="C_BAT.pin1" to="net.VBAT" />
    <trace from="C_BAT.pin2" to="net.GND" />
    <trace from="C_CHG_VDD.pin1" to="net.CHG_VDD" />
    <trace from="C_CHG_VDD.pin2" to="net.GND" />
    <trace from="C_NRF_BULK.pin1" to="net.VDD_NRF" />
    <trace from="C_NRF_BULK.pin2" to="net.GND" />
    <trace from="C_NRF_DEC1.pin1" to="net.VDD_NRF" />
    <trace from="C_NRF_DEC1.pin2" to="net.GND" />
    <trace from="C_NRF_DEC2.pin1" to="net.VDD_NRF" />
    <trace from="C_NRF_DEC2.pin2" to="net.GND" />
    <trace from="C_NRF_VDD_1U.pin1" to="net.VDD_NRF" />
    <trace from="C_NRF_VDD_1U.pin2" to="net.GND" />
    <trace from="C_DEC1.pin1" to="net.NRF_DEC1" />
    <trace from="C_DEC1.pin2" to="net.GND" />
    <trace from="C_DEC2.pin1" to="net.NRF_DEC2" />
    <trace from="C_DEC2.pin2" to="net.GND" />
    <trace from="C_DEC3.pin1" to="net.NRF_DEC3" />
    <trace from="C_DEC3.pin2" to="net.GND" />
    <trace from="C_DEC4_6.pin1" to="net.NRF_DEC4_6" />
    <trace from="C_DEC4_6.pin2" to="net.GND" />
    <trace from="C_DEC5.pin1" to="net.NRF_DEC5" />
    <trace from="C_DEC5.pin2" to="net.GND" />
    <trace from="C_DECUSB.pin1" to="net.NRF_DECUSB" />
    <trace from="C_DECUSB.pin2" to="net.GND" />
    <trace from="C_MOT1_VM.pin1" to="net.VSYS" />
    <trace from="C_MOT1_VM.pin2" to="net.GND" />
    <trace from="C_MOT1_VCC.pin1" to="net.VDD_NRF" />
    <trace from="C_MOT1_VCC.pin2" to="net.GND" />
    <trace from="C_MOT2_VM.pin1" to="net.VSYS" />
    <trace from="C_MOT2_VM.pin2" to="net.GND" />
    <trace from="C_MOT2_VCC.pin1" to="net.VDD_NRF" />
    <trace from="C_MOT2_VCC.pin2" to="net.GND" />

    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.15mm" />
  </board>
)
