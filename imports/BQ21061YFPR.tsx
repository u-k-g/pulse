import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1", "IN"],
  pin2: ["A2", "PMID"],
  pin3: ["A3", "BAT"],
  pin4: ["A4", "GND"],
  pin5: ["B1", "PG"],
  pin6: ["B2", "PMID"],
  pin7: ["B3", "BAT"],
  pin8: ["B4", "TS"],
  pin9: ["C1", "MR"],
  pin10: ["C2", "CE"],
  pin11: ["C3", "NC1"],
  pin12: ["C4", "NC2"],
  pin13: ["D1", "VDD"],
  pin14: ["D2", "INT"],
  pin15: ["D3", "LP"],
  pin16: ["D4", "LS_LDO"],
  pin17: ["E1", "VIO"],
  pin18: ["E2", "SDA"],
  pin19: ["E3", "SCL"],
  pin20: ["E4", "VINLS"]
} as const

export const BQ21061YFPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2869893"
  ]
}}
      manufacturerPartNumber="BQ21061YFPR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.8001mm" pcbY="-0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.8001mm" pcbY="-0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.8001mm" pcbY="0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.8001mm" pcbY="0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.40005mm" pcbY="-0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.40005mm" pcbY="-0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.40005mm" pcbY="0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.40005mm" pcbY="0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="-0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0mm" pcbY="-0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0mm" pcbY="0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.40005mm" pcbY="-0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.40005mm" pcbY="-0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.40005mm" pcbY="0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="0.40005mm" pcbY="0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.8001mm" pcbY="-0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0.8001mm" pcbY="-0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.8001mm" pcbY="0.199898mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.8001mm" pcbY="0.599948mm" width="0.1999996mm" height="0.1999996mm" shape="rect" />
<silkscreenpath route={[{"x":-1.076198000000005,"y":0.8761983999999785},{"x":1.076198000000005,"y":0.8761983999999785},{"x":1.076198000000005,"y":-0.8761983999999927},{"x":-1.076198000000005,"y":-0.8761983999999927},{"x":-1.076198000000005,"y":0.8761983999999785}]} />
<silkscreenpath route={[{"x":-0.9160001999999849,"y":-1.2700000000000102},{"x":-0.919407610556263,"y":-1.2958818527464473},{"x":-0.9293976328266353,"y":-1.3199998999999991},{"x":-0.9452894633027142,"y":-1.3407105366973155},{"x":-0.9660001000000022,"y":-1.356602367173366},{"x":-0.9901181472535541,"y":-1.3665923894437526},{"x":-1.0160000000000053,"y":-1.3699998000000164},{"x":-1.0418818527464282,"y":-1.3665923894437526},{"x":-1.06599989999998,"y":-1.356602367173366},{"x":-1.0867105366972964,"y":-1.3407105366973155},{"x":-1.102602367173347,"y":-1.3199998999999991},{"x":-1.1125923894437335,"y":-1.2958818527464473},{"x":-1.1159997999999973,"y":-1.2700000000000102},{"x":-1.1125923894437335,"y":-1.244118147253559},{"x":-1.102602367173347,"y":-1.2200001000000071},{"x":-1.0867105366972964,"y":-1.199289463302705},{"x":-1.06599989999998,"y":-1.1833976328266544},{"x":-1.0418818527464282,"y":-1.1734076105562679},{"x":-1.0160000000000053,"y":-1.170000200000004},{"x":-0.9901181472535541,"y":-1.1734076105562679},{"x":-0.9660001000000022,"y":-1.1833976328266544},{"x":-0.9452894633027142,"y":-1.199289463302705},{"x":-0.9293976328266353,"y":-1.2200001000000071},{"x":-0.919407610556263,"y":-1.244118147253559},{"x":-0.9160001999999849,"y":-1.2700000000000102}]} />
<silkscreentext text="{NAME}" pcbX="-0.0254mm" pcbY="1.8636mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.367599999999996,"y":1.113599999999991},{"x":1.3168000000000148,"y":1.113599999999991},{"x":1.3168000000000148,"y":-1.621600000000015},{"x":-1.367599999999996,"y":-1.621600000000015},{"x":-1.367599999999996,"y":1.113599999999991}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869893.obj?uuid=8f5bf60570c946a0add15337ad8d14e8",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869893.step?uuid=8f5bf60570c946a0add15337ad8d14e8",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.599999 },
      }}
      {...props}
    />
  )
}
