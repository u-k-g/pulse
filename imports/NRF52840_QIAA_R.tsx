import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A8", "P0_31_AIN7"],
  pin2: ["A10", "P0_29_AIN5"],
  pin3: ["A12", "P0_02_AIN0"],
  pin4: ["A14", "P1_15"],
  pin5: ["A16", "P1_13"],
  pin6: ["A18", "DEC2"],
  pin7: ["A20", "P1_10"],
  pin8: ["A22", "VDD"],
  pin9: ["A23", "XC2"],
  pin10: ["B1", "VDD"],
  pin11: ["B3", "DCC"],
  pin12: ["B5", "DEC4"],
  pin13: ["B7", "VSS"],
  pin14: ["B9", "P0_30_AIN6"],
  pin15: ["B11", "P0_28_AIN4"],
  pin16: ["B13", "P0_03_AIN1"],
  pin17: ["B15", "P1_14"],
  pin18: ["B17", "P1_12"],
  pin19: ["B19", "P1_11"],
  pin20: ["B24", "XC1"],
  pin21: ["C1", "DEC1"],
  pin22: ["D2", "P0_00_XL1"],
  pin23: ["D23", "DEC3"],
  pin24: ["E24", "DEC6"],
  pin25: ["F2", "P0_01_XL2"],
  pin26: ["F23", "VSS_PA"],
  pin27: ["G1", "P0_26"],
  pin28: ["H2", "P0_27"],
  pin29: ["H23", "ANT"],
  pin30: ["J1", "P0_04_AIN2"],
  pin31: ["J24", "P0_10_NFC2"],
  pin32: ["K2", "P0_05_AIN3"],
  pin33: ["L1", "P0_06"],
  pin34: ["L24", "P0_09_NFC1"],
  pin35: ["M2", "P0_07"],
  pin36: ["N1", "P0_08"],
  pin37: ["N24", "DEC5"],
  pin38: ["P2", "P1_08"],
  pin39: ["P23", "P1_07"],
  pin40: ["R1", "P1_09"],
  pin41: ["R24", "P1_06"],
  pin42: ["T2", "P0_11"],
  pin43: ["T23", "P1_05"],
  pin44: ["U1", "P0_12"],
  pin45: ["U24", "P1_04"],
  pin46: ["V23", "P1_03"],
  pin47: ["W1", "VDD"],
  pin48: ["W24", "P1_02"],
  pin49: ["Y2", "VDDH"],
  pin50: ["Y23"],
  pin51: ["AA24", "SWDCLK"],
  pin52: ["AB2", "DCCH"],
  pin53: ["AC5", "DECUSB"],
  pin54: ["AC9", "P0_14"],
  pin55: ["AC11", "P0_16"],
  pin56: ["AC13", "P0_18_RESET", "RESET_N"],
  pin57: ["AC15", "P0_19"],
  pin58: ["AC17", "P0_21"],
  pin59: ["AC19", "P0_23"],
  pin60: ["AC21", "P0_25"],
  pin61: ["AD2", "VBUS"],
  pin62: ["AD4", "USB_DN"],
  pin63: ["AD6", "USB_DP"],
  pin64: ["AD8", "P0_13"],
  pin65: ["AD10", "P0_15"],
  pin66: ["AD12", "P0_17"],
  pin67: ["AD14", "VDD"],
  pin68: ["AD16", "P0_20"],
  pin69: ["AD18", "P0_22"],
  pin70: ["AD20", "P0_24"],
  pin71: ["AD22", "P1_00"],
  pin72: ["AD23", "VDD"],
  pin73: ["EP", "VSS"],
  pin74: ["AC24", "SWDIO"]
} as const

export const NRF52840_QIAA_R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C190794"
  ]
}}
      manufacturerPartNumber="NRF52840_QIAA_R"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-3.24993mm" pcbY="-1.249934mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.24993mm" pcbY="-0.750062mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-3.24993mm" pcbY="-0.249936mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-3.24993mm" pcbY="0.249936mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-3.24993mm" pcbY="0.750062mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.24993mm" pcbY="1.249934mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-3.24993mm" pcbY="1.75006mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-3.24993mm" pcbY="2.249932mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-3.24993mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-2.750058mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.750058mm" pcbY="-2.499868mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-2.750058mm" pcbY="-1.999996mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.750058mm" pcbY="-1.49987mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-2.750058mm" pcbY="-0.999998mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-2.750058mm" pcbY="-0.499872mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.750058mm" pcbY="0mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-2.750058mm" pcbY="0.500126mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-2.750058mm" pcbY="0.999998mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-2.750058mm" pcbY="1.500124mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-2.750058mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-2.249932mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.999996mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.999996mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.75006mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-1.49987mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.49987mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-1.249934mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-0.999998mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.999998mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.750062mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.750062mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-0.499872mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-0.249936mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-0.249936mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="0.249936mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="0.249936mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="0.500126mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="0.499872mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="0.750062mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="0.750062mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="0.999998mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="0.999998mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="1.249934mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="1.249934mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="1.49987mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="1.75006mm" pcbY="-3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="1.75006mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="1.999996mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="1.999996mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="2.249932mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="2.500122mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="2.750058mm" pcbY="-1.999996mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="2.750058mm" pcbY="-0.999998mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="2.750058mm" pcbY="-0.499872mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="2.750058mm" pcbY="0mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="2.750058mm" pcbY="0.500126mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="2.750058mm" pcbY="0.999998mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="2.750058mm" pcbY="1.500124mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="2.750058mm" pcbY="1.999996mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="3.24993mm" pcbY="-2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="3.24993mm" pcbY="-2.249932mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="3.24993mm" pcbY="-1.75006mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="3.24993mm" pcbY="-1.249934mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="3.24993mm" pcbY="-0.750062mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="3.24993mm" pcbY="-0.249936mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="3.24993mm" pcbY="0.249936mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="3.24993mm" pcbY="0.750062mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="3.24993mm" pcbY="1.249934mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="3.24993mm" pcbY="1.75006mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="3.24993mm" pcbY="2.249932mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="3.24993mm" pcbY="2.750058mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="0mm" pcbY="0mm" width="4.850003mm" height="4.850003mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="2.750058mm" pcbY="3.24993mm" width="0.2500122mm" height="0.2500122mm" shape="rect" />
<silkscreenpath route={[{"x":-3.5001200000000097,"y":-3.0500319999999874},{"x":-2.999994000000001,"y":-3.549903999999998},{"x":-2.990850000000009,"y":-3.549903999999998}]} />
<silkscreenpath route={[{"x":3.5500056000000058,"y":-3.5500055999999915},{"x":3.5500056000000058,"y":3.549980199999993},{"x":-3.549980199999993,"y":3.549980199999993},{"x":-3.549980199999993,"y":-3.5500055999999915},{"x":3.5500056000000058,"y":-3.5500055999999915}]} />
<silkscreenpath route={[{"x":-3.249930000000006,"y":-3.850132000000002},{"x":-3.2533400070083047,"y":-3.8760335747576704},{"x":-3.2633376416908817,"y":-3.9001699999999886},{"x":-3.2792415817659872,"y":-3.9208964182340083},{"x":-3.299968000000007,"y":-3.936800358309114},{"x":-3.324104425242325,"y":-3.9467979929916908},{"x":-3.3500060000000076,"y":-3.9502080000000035},{"x":-3.37590757475769,"y":-3.9467979929916908},{"x":-3.4000440000000083,"y":-3.936800358309114},{"x":-3.420770418234028,"y":-3.9208964182340083},{"x":-3.4366743583091335,"y":-3.9001699999999886},{"x":-3.4466719929917105,"y":-3.8760335747576704},{"x":-3.450082000000009,"y":-3.850132000000002},{"x":-3.4466719929917105,"y":-3.8242304252423196},{"x":-3.4366743583091335,"y":-3.8000940000000014},{"x":-3.420770418234028,"y":-3.7793675817659818},{"x":-3.4000440000000083,"y":-3.763463641690862},{"x":-3.37590757475769,"y":-3.753466007008285},{"x":-3.3500060000000076,"y":-3.7500560000000007},{"x":-3.324104425242325,"y":-3.753466007008285},{"x":-3.299968000000007,"y":-3.763463641690862},{"x":-3.2792415817659872,"y":-3.7793675817659818},{"x":-3.2633376416908817,"y":-3.8000940000000014},{"x":-3.2533400070083047,"y":-3.8242304252423196},{"x":-3.249930000000006,"y":-3.850132000000002}]} />
<silkscreentext text="{NAME}" pcbX="0.008128mm" pcbY="4.547872mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.797871999999998,"y":3.7978720000000123},{"x":3.8141279999999966,"y":3.7978720000000123},{"x":3.8141279999999966,"y":-4.195127999999983},{"x":-3.797871999999998,"y":-4.195127999999983},{"x":-3.797871999999998,"y":3.7978720000000123}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C190794.obj?uuid=766a57c2d96e4e63aab255597c4e7669",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C190794.step?uuid=766a57c2d96e4e63aab255597c4e7669",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
