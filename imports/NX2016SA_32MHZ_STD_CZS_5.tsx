import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["X1"],
  pin2: ["GND1"],
  pin3: ["X2"],
  pin4: ["GND2"]
} as const

export const NX2016SA_32MHZ_STD_CZS_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={{
        X1: { requiresPower: true },
        GND1: { requiresGround: true },
        GND2: { requiresGround: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C843260"
  ]
}}
      manufacturerPartNumber="NX2016SA_32MHZ_STD_CZS_5"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.899922mm" pcbY="-0.599948mm" width="0.999998mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.899922mm" pcbY="-0.599948mm" width="0.999998mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.899922mm" pcbY="0.599948mm" width="0.999998mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.899922mm" pcbY="0.599948mm" width="0.999998mm" height="0.7999984mm" shape="rect" />
<silkscreenpath route={[{"x":-1.8871946000000435,"y":-0.09999979999997777},{"x":-1.8871946000000435,"y":-1.55719780000004},{"x":-0.6299962000000505,"y":-1.55719780000004}]} />
<silkscreenpath route={[{"x":-1.5290800000000218,"y":-1.328420000000051},{"x":-1.6510000000000673,"y":-1.328420000000051},{"x":-1.6510000000000673,"y":1.328420000000051},{"x":1.65099999999984,"y":1.328420000000051},{"x":1.65099999999984,"y":-1.328420000000051},{"x":-1.5290800000000218,"y":-1.328420000000051}]} />
<silkscreentext text="{NAME}" pcbX="-0.1143mm" pcbY="2.3208mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.129600000000096,"y":1.570799999999963},{"x":1.90099999999984,"y":1.570799999999963},{"x":1.90099999999984,"y":-1.8248000000000957},{"x":-2.129600000000096,"y":-1.8248000000000957},{"x":-2.129600000000096,"y":1.570799999999963}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C843260.obj?uuid=dc81ff9354ed4b8cbd6cd100f638c07d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C843260.step?uuid=dc81ff9354ed4b8cbd6cd100f638c07d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
