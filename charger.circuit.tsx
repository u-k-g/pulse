import React from "react"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"
import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { USBLC6_2P6 } from "./imports/USBLC6_2P6"
import { SN74AXC1T45DCKR } from "./imports/SN74AXC1T45DCKR"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { MF_PSMF050X_2 } from "./imports/MF_PSMF050X_2"
import { TPS2553DBVR } from "./imports/TPS2553DBVR"
import { L2N7002SLLT1G } from "./imports/L2N7002SLLT1G"

const DockPogoContacts = (props: any) => (
  <connector
    pinLabels={{
      pin1: ["GND"],
      pin2: ["V5_CHG"],
      pin3: ["SWDIO_TGT"],
      pin4: ["SWDCLK_TGT"],
      pin5: ["RESET_N_TGT"],
      pin6: ["VREF_TGT"],
    }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="3.4mm" width="1.25mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="3.4mm" width="1.25mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX="-1.4mm" pcbY="0mm" width="1.25mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX="1.4mm" pcbY="0mm" width="1.25mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX="-1.4mm" pcbY="-3.4mm" width="1.25mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX="1.4mm" pcbY="-3.4mm" width="1.25mm" height="1.6mm" shape="rect" />
        <silkscreenrect pcbX="0mm" pcbY="0mm" width="7.8mm" height="11.8mm" />
        <silkscreentext text="RECESSED POGO FACE" pcbX="0mm" pcbY="-6.7mm" fontSize="0.7mm" anchorAlignment="center" />
      </footprint>
    }
    {...props}
  />
)

const TwoPadServiceJumper = (props: any) => (
  <connector
    pinLabels={{
      pin1: ["A"],
      pin2: ["B"],
    }}
    footprint={
      <footprint insertionDirection="from_above">
        <smtpad portHints={["pin1"]} pcbX="-0.55mm" pcbY="0mm" width="0.8mm" height="1mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX="0.55mm" pcbY="0mm" width="0.8mm" height="1mm" shape="rect" />
        <silkscreenrect pcbX="0mm" pcbY="0mm" width="2.3mm" height="1.6mm" />
      </footprint>
    }
    {...props}
  />
)

export default () => (
  <board width="64mm" height="20mm" layers={2}>
    <schematicsection name="USB_Power" displayName="USB / Power" />
    <schematicsection name="Debug_Bridge" displayName="Debug Bridge" />
    <schematicsection name="Target_Interface" displayName="Target Interface" />

    <connector
      name="J_USB"
      standard="usb_c"
      manufacturerPartNumber="USB4105-GF-A"
      supplierPartNumbers={{ jlcpcb: ["C3020560"] }}
      pinLabels={{
        pin1: ["VBUS1"],
        pin2: ["VBUS2"],
        pin3: ["GND1"],
        pin4: ["GND2"],
        pin5: ["SHELL1"],
        pin6: ["SHELL2"],
        pin7: ["SHELL3"],
        pin8: ["SHELL4"],
        pin9: ["CC1"],
        pin10: ["CC2"],
        pin11: ["DP1"],
        pin12: ["DP2"],
        pin13: ["DM1"],
        pin14: ["DM2"],
      }}
      footprint={
        <footprint insertionDirection="from_above">
          <smtpad portHints={["pin1"]} pcbX="-2.7mm" pcbY="1.75mm" width="0.55mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="2.7mm" pcbY="1.75mm" width="0.55mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-3.45mm" pcbY="-1.75mm" width="0.55mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="3.45mm" pcbY="-1.75mm" width="0.55mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="-4.2mm" pcbY="3.2mm" width="1.2mm" height="1.8mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="4.2mm" pcbY="3.2mm" width="1.2mm" height="1.8mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="-4.2mm" pcbY="-3.2mm" width="1.2mm" height="1.8mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="4.2mm" pcbY="-3.2mm" width="1.2mm" height="1.8mm" shape="rect" />
          <smtpad portHints={["pin9"]} pcbX="-1.8mm" pcbY="1.75mm" width="0.35mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin10"]} pcbX="1.8mm" pcbY="1.75mm" width="0.35mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin11"]} pcbX="-0.9mm" pcbY="1.75mm" width="0.35mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin12"]} pcbX="0.9mm" pcbY="1.75mm" width="0.35mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin13"]} pcbX="-0.3mm" pcbY="1.75mm" width="0.35mm" height="1.1mm" shape="rect" />
          <smtpad portHints={["pin14"]} pcbX="0.3mm" pcbY="1.75mm" width="0.35mm" height="1.1mm" shape="rect" />
          <silkscreenrect pcbX="0mm" pcbY="0mm" width="9.2mm" height="7.8mm" />
        </footprint>
      }
      schPinArrangement={{
        leftSide: {
          pins: [
            "VBUS1",
            "VBUS2",
            "GND1",
            "GND2",
            "SHELL1",
            "SHELL2",
            "SHELL3",
            "SHELL4",
            "CC1",
            "CC2",
            "DP1",
            "DP2",
            "DM1",
            "DM2",
          ],
          direction: "top-to-bottom",
        },
      }}
      pcbX="-27mm"
      pcbY="0mm"
      pcbRotation={270}
      schX={-12}
      schY={0}
      schWidth={1.67}
      schHeight={3.45}
      schSectionName="USB_Power"
      shouldBeOnEdgeOfBoard={false}
    />
    <USBLC6_2P6 name="D_USB_ESD" pcbX="-19.2mm" pcbY="-4.8mm" schX={-8} schY="-2.2" schSectionName="USB_Power" />
    <AP2112K_3_3TRG1 name="U_LDO" pcbX="-17.2mm" pcbY="4.2mm" schX={-8} schY={2.2} schHeight={0.6} schSectionName="USB_Power" />
    <resistor name="R_CC1" resistance="5.1k" footprint="0402" pcbX="-22.4mm" pcbY="7.5mm" schX={-9.73} schY={2.9} schSectionName="USB_Power" />
    <resistor name="R_CC2" resistance="5.1k" footprint="0402" pcbX="-21.0mm" pcbY="8.6mm" schX={-6.4} schY={3.4} schSectionName="USB_Power" />
    <capacitor name="C_LDO_IN" capacitance="1uF" footprint="0402" pcbX="-13.8mm" pcbY="6.8mm" schX={-5.0} schY={3.4} schOrientation="vertical" schSectionName="USB_Power" />
    <capacitor name="C_LDO_OUT" capacitance="2.2uF" footprint="0402" pcbX="-11.5mm" pcbY="3.4mm" schX={-6.6} schY={1.0} schOrientation="vertical" schSectionName="USB_Power" />
    <MF_PSMF050X_2 name="F_POGO_VBUS" pcbX="7.0mm" pcbY="8.0mm" schX={7.0} schY={5.8} schSectionName="USB_Power" />
    <TPS2553DBVR name="U_POGO_SW" pcbX="12.0mm" pcbY="5.6mm" schX={9.42} schY={3.2} schSectionName="USB_Power" />
    <resistor name="R_POGO_ILIM" resistance="49.9k" footprint="0402" pcbX="11.2mm" pcbY="0.3mm" schX={11.0} schY={4.5} schSectionName="USB_Power" />
    <resistor name="R_POGO_EN_PD" resistance="100k" footprint="0402" pcbX="15.8mm" pcbY="1.4mm" schX={13.2} schY={5.4} schSectionName="USB_Power" />
    <resistor name="R_POGO_FAULT_PU" resistance="100k" footprint="0402" pcbX="18.0mm" pcbY="1.4mm" schX={16.6} schY={5.4} schSectionName="USB_Power" />
    <capacitor name="C_POGO_SW_IN" capacitance="100nF" footprint="0402" pcbX="3.0mm" pcbY="7.4mm" schX={3.6} schY={-1.2} schOrientation="vertical" schSectionName="USB_Power" />
    <capacitor name="C_POGO_VBUS" capacitance="1uF" footprint="0402" pcbX="16.5mm" pcbY="7.6mm" schX={15.0} schY={3.0} schOrientation="vertical" schSectionName="USB_Power" />

    <RP2040 name="U_DBG" pcbX="-5.8mm" pcbY="0mm" schX={-2.52} schY={0} schWidth={2.4} schHeight={5.8} schSectionName="Debug_Bridge" />
    <W25Q16JVSNIQ name="U_FLASH" pcbX="3.4mm" pcbY="-3.3mm" schX={6.41} schY="-2.2" schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_BULK" capacitance="4.7uF" footprint="0603" pcbX="-0.8mm" pcbY="7.1mm" schX={1.8} schY={5.4} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_VREG" capacitance="1uF" footprint="0402" pcbX="-4.1mm" pcbY="7.1mm" schX={2.3} schY={3.2} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <X322512MSB4SI name="Y_DBG" pcbX="-6mm" pcbY="-7.1mm" schX={-2.5} schY={-4.3} schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_XIN" capacitance="18pF" footprint="0402" pcbX="-13.5mm" pcbY="-7.4mm" schX={-4.8} schY={-5.6} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_XOUT" capacitance="18pF" footprint="0402" pcbX="6.7mm" pcbY="-8.2mm" schX={-0.4} schY={-5.8} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <resistor name="R_DBG_RUN" resistance="10k" footprint="0402" pcbX="-2.5mm" pcbY="-6.5mm" schX={2.1} schY={-3.8} schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_RUN" capacitance="100nF" footprint="0402" pcbX="0.3mm" pcbY="-8.8mm" schX={1.6} schY={-5.8} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_CORE1" capacitance="100nF" footprint="0402" pcbX="-7.0mm" pcbY="7.8mm" schX={-1.2} schY={4.2} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_CORE2" capacitance="100nF" footprint="0402" pcbX="-10.8mm" pcbY="7.8mm" schX={-3.2} schY={4.2} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <capacitor name="C_DBG_AVDD" capacitance="100nF" footprint="0402" pcbX="0.4mm" pcbY="5.2mm" schX={4.6} schY={4.1} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <capacitor name="C_FLASH_VCC" capacitance="100nF" footprint="0402" pcbX="8.8mm" pcbY="-8.2mm" schX={3.0} schY={-0.8} schOrientation="vertical" schSectionName="Debug_Bridge" />
    <resistor name="R_FLASH_CS" resistance="10k" footprint="0402" pcbX="4.5mm" pcbY="1.4mm" schX={11.53} schY={-3.2} schSectionName="Debug_Bridge" />
    <TwoPadServiceJumper name="JP_BOOTSEL" pcbX="6.3mm" pcbY="-9.15mm" schX={8.9} schY={-5.2} schSectionName="Debug_Bridge" />
    <TwoPadServiceJumper name="JP_RUN" pcbX="-4.8mm" pcbY="-9.15mm" schX={0.42} schY={-4.5} schSectionName="Debug_Bridge" />

    <SN74AXC1T45DCKR name="U_LVL_SWDIO" pcbX="7.2mm" pcbY="2.4mm" schX={8.24} schY={0.9} schSectionName="Target_Interface" />
    <SN74AXC1T45DCKR name="U_LVL_SWCLK" pcbX="8.2mm" pcbY="-1.0mm" schX={7.53} schY={-0.9} schSectionName="Target_Interface" />
    <L2N7002SLLT1G name="Q_RESET_OD" pcbX="15.0mm" pcbY="-5.4mm" schX={13.2} schY={-3.6} schHeight={0.4} schSectionName="Target_Interface" />
    <resistor name="R_RESET_GATE_PD" resistance="100k" footprint="0402" pcbX="12.0mm" pcbY="-5.4mm" schX={3.75} schY={-3.35} schSectionName="Target_Interface" />
    <resistor name="R_SWCLK_SER" resistance="47" footprint="0402" pcbX="13.4mm" pcbY="-2.2mm" schX={11.8} schY={-1.4} schSectionName="Target_Interface" />
    <resistor name="R_SWDIO_SER" resistance="47" footprint="0402" pcbX="14.8mm" pcbY="2.6mm" schX={10.4} schY={1.6} schSectionName="Target_Interface" />
    <capacitor name="C_LVL_3V3" capacitance="100nF" footprint="0402" pcbX="3.5mm" pcbY="5.8mm" schX={5.7} schY={3.4} schOrientation="vertical" schSectionName="Target_Interface" />
    <capacitor name="C_VREF_TGT" capacitance="100nF" footprint="0402" pcbX="7.4mm" pcbY="5.8mm" schX={12.28} schY={1.9} schOrientation="vertical" schSectionName="Target_Interface" />
    <DockPogoContacts name="J_POGO_DOCK" pcbX="23.5mm" pcbY="0mm" schX={13} schY={0} schWidth={2.4} schHeight={0.8} schSectionName="Target_Interface" />
    <fabricationnotetext text="RECESSED SPRING POGO FACE; POWER ENABLED BY TPS2553 ONLY" pcbX="18.2mm" pcbY="-8.6mm" fontSize="0.7mm" anchorAlignment="center" />
    <fabricationnotetext text="TPS2553 ILIM 49.9K: ABOUT 520MA TYP POGO CURRENT LIMIT" pcbX="10.5mm" pcbY="9.1mm" fontSize="0.7mm" anchorAlignment="center" />
    <fabricationnotetext text="J_USB TARGET: GCT USB4105-GF-A / JLC C3020560" pcbX="-20.5mm" pcbY="-8.7mm" fontSize="0.7mm" anchorAlignment="center" />

    <hole name="H_MAG1" pcbX="19.1mm" pcbY="6.1mm" diameter="2.2mm" />
    <hole name="H_MAG2" pcbX="19.1mm" pcbY="-6.1mm" diameter="2.2mm" />
    <hole name="H_MAG3" pcbX="27.6mm" pcbY="6.1mm" diameter="2.2mm" />
    <hole name="H_MAG4" pcbX="27.6mm" pcbY="-6.1mm" diameter="2.2mm" />

    <trace from="J_USB.VBUS1" to="net.USB_VBUS" />
    <trace from="J_USB.VBUS2" to="net.USB_VBUS" />
    <trace from="J_USB.GND1" to="net.GND" />
    <trace from="J_USB.GND2" to="net.GND" />
    <trace from="J_USB.SHELL1" to="net.GND" />
    <trace from="J_USB.SHELL2" to="net.GND" />
    <trace from="J_USB.SHELL3" to="net.GND" />
    <trace from="J_USB.SHELL4" to="net.GND" />
    <trace from="J_USB.CC1" to="R_CC1.pin1" schDisplayLabel="CC1" />
    <trace from="J_USB.CC2" to="R_CC2.pin1" schDisplayLabel="CC2" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="R_CC2.pin2" to="net.GND" />
    <trace from="J_USB.DP1" to="net.USB_DP" />
    <trace from="J_USB.DP2" to="net.USB_DP" />
    <trace from="J_USB.DM1" to="net.USB_DM" />
    <trace from="J_USB.DM2" to="net.USB_DM" />
    <trace from="D_USB_ESD.VBUS" to="net.USB_VBUS" />
    <trace from="D_USB_ESD.GND" to="net.GND" />
    <trace from="D_USB_ESD.pin1" to="net.USB_DM" />
    <trace from="D_USB_ESD.pin6" to="net.USB_DM" />
    <trace from="D_USB_ESD.pin3" to="net.USB_DP" />
    <trace from="D_USB_ESD.pin4" to="net.USB_DP" />

    <trace from="U_LDO.VIN" to="net.USB_VBUS" />
    <trace from="U_LDO.EN" to="net.USB_VBUS" />
    <trace from="U_LDO.GND" to="net.GND" />
    <trace from="U_LDO.VOUT" to="net.V3_3_DOCK" />
    <trace from="C_LDO_IN.pin1" to="net.USB_VBUS" />
    <trace from="C_LDO_IN.pin2" to="net.GND" />
    <trace from="C_LDO_OUT.pin1" to="net.V3_3_DOCK" />
    <trace from="C_LDO_OUT.pin2" to="net.GND" />
    <trace from="F_POGO_VBUS.pin1" to="net.USB_VBUS" width="0.35mm" />
    <trace from="F_POGO_VBUS.pin2" to="net.V5_SWITCH_IN" width="0.35mm" />
    <trace from="U_POGO_SW.IN" to="net.V5_SWITCH_IN" width="0.35mm" />
    <trace from="U_POGO_SW.OUT" to="net.V5_POGO" width="0.35mm" />
    <trace from="U_POGO_SW.GND" to="net.GND" />
    <trace from="U_POGO_SW.EN" to="net.POGO_EN" />
    <trace from="U_POGO_SW.ILIM" to="R_POGO_ILIM.pin1" />
    <trace from="U_POGO_SW.FAULT" to="net.POGO_FAULT_N" />
    <trace from="R_POGO_ILIM.pin2" to="net.GND" />
    <trace from="R_POGO_EN_PD.pin1" to="net.POGO_EN" />
    <trace from="R_POGO_EN_PD.pin2" to="net.GND" />
    <trace from="R_POGO_FAULT_PU.pin1" to="net.POGO_FAULT_N" />
    <trace from="R_POGO_FAULT_PU.pin2" to="net.V3_3_DOCK" />
    <trace from="C_POGO_SW_IN.pin1" to="net.V5_SWITCH_IN" />
    <trace from="C_POGO_SW_IN.pin2" to="net.GND" />
    <trace from="C_POGO_VBUS.pin1" to="net.V5_POGO" />
    <trace from="C_POGO_VBUS.pin2" to="net.GND" />

    <trace from="U_DBG.USB_DP" to="net.USB_DP" />
    <trace from="U_DBG.USB_DM" to="net.USB_DM" />
    <trace from="U_DBG.USB_VDD" to="net.V3_3_DOCK" />
    <trace from="U_DBG.VREG_IN" to="net.V3_3_DOCK" />
    <trace from="U_DBG.VREG_VOUT" to="net.RP_VREG_OUT" />
    <trace from="U_DBG.DVDD1" to="net.RP_VREG_OUT" />
    <trace from="U_DBG.DVDD2" to="net.RP_VREG_OUT" />
    <trace from="U_DBG.ADC_AVDD" to="net.V3_3_DOCK" />
    <trace from="U_DBG.TESTEN" to="net.GND" />
    <trace from="U_DBG.GND" to="net.GND" />
    <trace from="U_DBG.IOVDD1" to="net.V3_3_DOCK" />
    <trace from="U_DBG.IOVDD2" to="net.V3_3_DOCK" />
    <trace from="U_DBG.IOVDD3" to="net.V3_3_DOCK" />
    <trace from="U_DBG.IOVDD4" to="net.V3_3_DOCK" />
    <trace from="U_DBG.IOVDD5" to="net.V3_3_DOCK" />
    <trace from="U_DBG.IOVDD6" to="net.V3_3_DOCK" />
    <trace from="C_DBG_BULK.pin1" to="net.V3_3_DOCK" />
    <trace from="C_DBG_BULK.pin2" to="net.GND" />
    <trace from="C_DBG_VREG.pin1" to="net.RP_VREG_OUT" />
    <trace from="C_DBG_VREG.pin2" to="net.GND" />
    <trace from="C_DBG_CORE1.pin1" to="net.RP_VREG_OUT" />
    <trace from="C_DBG_CORE1.pin2" to="net.GND" />
    <trace from="C_DBG_CORE2.pin1" to="net.RP_VREG_OUT" />
    <trace from="C_DBG_CORE2.pin2" to="net.GND" />
    <trace from="C_DBG_AVDD.pin1" to="net.V3_3_DOCK" />
    <trace from="C_DBG_AVDD.pin2" to="net.GND" />
    <trace from="U_DBG.XIN" to="net.RP_XIN" />
    <trace from="U_DBG.XOUT" to="net.RP_XOUT" />
    <trace from="Y_DBG.OSC1" to="net.RP_XIN" />
    <trace from="Y_DBG.OSC2" to="net.RP_XOUT" />
    <trace from="Y_DBG.GND1" to="net.GND" />
    <trace from="Y_DBG.GND2" to="net.GND" />
    <trace from="C_DBG_XIN.pin1" to="net.RP_XIN" />
    <trace from="C_DBG_XIN.pin2" to="net.GND" />
    <trace from="C_DBG_XOUT.pin1" to="net.RP_XOUT" />
    <trace from="C_DBG_XOUT.pin2" to="net.GND" />
    <trace from="U_DBG.RUN" to="net.RP_RUN" />
    <trace from="R_DBG_RUN.pin1" to="net.V3_3_DOCK" />
    <trace from="R_DBG_RUN.pin2" to="net.RP_RUN" />
    <trace from="C_DBG_RUN.pin1" to="net.RP_RUN" />
    <trace from="C_DBG_RUN.pin2" to="net.GND" />

    <trace from="U_FLASH.VCC" to="net.V3_3_DOCK" />
    <trace from="U_FLASH.GND" to="net.GND" />
    <trace from="U_FLASH.CS" to="net.QSPI_SS" schDisplayLabel="QSPI_SS" />
    <trace from="U_FLASH.CLK" to="U_DBG.QSPI_SCLK" schDisplayLabel="QSPI_CLK" />
    <trace from="U_FLASH.IO0" to="U_DBG.QSPI_SD0" schDisplayLabel="QSPI_IO0" />
    <trace from="U_FLASH.IO1" to="U_DBG.QSPI_SD1" schDisplayLabel="QSPI_IO1" />
    <trace from="U_FLASH.IO2" to="U_DBG.QSPI_SD2" schDisplayLabel="QSPI_IO2" />
    <trace from="U_FLASH.IO3" to="U_DBG.QSPI_SD3" schDisplayLabel="QSPI_IO3" />
    <trace from="C_FLASH_VCC.pin1" to="net.V3_3_DOCK" />
    <trace from="C_FLASH_VCC.pin2" to="net.GND" />
    <trace from="R_FLASH_CS.pin1" to="net.QSPI_SS" schDisplayLabel="QSPI_SS" />
    <trace from="R_FLASH_CS.pin2" to="net.V3_3_DOCK" />
    <trace from="JP_BOOTSEL.A" to="net.QSPI_SS" schDisplayLabel="QSPI_SS" />
    <trace from="JP_BOOTSEL.B" to="net.GND" />
    <trace from="JP_RUN.A" to="net.RP_RUN" />
    <trace from="JP_RUN.B" to="net.GND" />

    <trace from="U_DBG.QSPI_SS" to="net.QSPI_SS" schDisplayLabel="QSPI_SS" />
    <trace from="U_DBG.GPIO2" to="net.RP_SWDIO" />
    <trace from="U_DBG.GPIO3" to="net.RP_SWCLK" />
    <trace from="U_DBG.GPIO4" to="net.RP_RESET_N" />
    <trace from="U_DBG.GPIO5" to="net.RP_SWDIO_DIR" />
    <trace from="U_DBG.GPIO6" to="net.POGO_EN" />
    <trace from="U_DBG.GPIO7" to="net.POGO_FAULT_N" />
    <trace from="U_LVL_SWDIO.VCCA" to="net.V3_3_DOCK" />
    <trace from="U_LVL_SWDIO.VCCB" to="net.VREF_TGT" />
    <trace from="U_LVL_SWDIO.GND" to="net.GND" />
    <trace from="U_LVL_SWDIO.DIR" to="net.RP_SWDIO_DIR" />
    <trace from="U_LVL_SWDIO.A" to="net.RP_SWDIO" />
    <trace from="U_LVL_SWDIO.B" to="R_SWDIO_SER.pin1" schDisplayLabel="SWDIO_BUF" />
    <trace from="R_SWDIO_SER.pin2" to="net.SWDIO_TGT" />
    <trace from="U_LVL_SWCLK.VCCA" to="net.V3_3_DOCK" />
    <trace from="U_LVL_SWCLK.VCCB" to="net.VREF_TGT" />
    <trace from="U_LVL_SWCLK.GND" to="net.GND" />
    <trace from="U_LVL_SWCLK.DIR" to="net.V3_3_DOCK" />
    <trace from="U_LVL_SWCLK.A" to="net.RP_SWCLK" />
    <trace from="U_LVL_SWCLK.B" to="R_SWCLK_SER.pin1" schDisplayLabel="SWCLK_BUF" />
    <trace from="R_SWCLK_SER.pin2" to="net.SWDCLK_TGT" />
    <trace from="Q_RESET_OD.D" to="net.RESET_N_TGT" />
    <trace from="Q_RESET_OD.S" to="net.GND" />
    <trace from="Q_RESET_OD.G" to="net.RP_RESET_N" />
    <trace from="R_RESET_GATE_PD.pin1" to="net.RP_RESET_N" />
    <trace from="R_RESET_GATE_PD.pin2" to="net.GND" />
    <trace from="C_LVL_3V3.pin1" to="net.V3_3_DOCK" />
    <trace from="C_LVL_3V3.pin2" to="net.GND" />
    <trace from="C_VREF_TGT.pin1" to="net.VREF_TGT" />
    <trace from="C_VREF_TGT.pin2" to="net.GND" />

    <trace from="J_POGO_DOCK.GND" to="net.GND" />
    <trace from="J_POGO_DOCK.V5_CHG" to="net.V5_POGO" width="0.35mm" />
    <trace from="J_POGO_DOCK.SWDIO_TGT" to="net.SWDIO_TGT" />
    <trace from="J_POGO_DOCK.SWDCLK_TGT" to="net.SWDCLK_TGT" />
    <trace from="J_POGO_DOCK.RESET_N_TGT" to="net.RESET_N_TGT" />
    <trace from="J_POGO_DOCK.VREF_TGT" to="net.VREF_TGT" />

    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.15mm" />
  </board>
)
