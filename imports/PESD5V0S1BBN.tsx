import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const PESD5V0S1BBN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={{
        pin1: { requiresPower: true },
        pin2: { requiresGround: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C314264"
  ]
}}
      manufacturerPartNumber="PESD5V0S1BBN"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.749935mm" pcbY="0mm" width="0.5999988mm" height="0.3999992mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.749935mm" pcbY="0mm" width="0.5999988mm" height="0.3999992mm" shape="rect" />
<silkscreenpath route={[{"x":-0.6500113999999826,"y":0.4999990000000025},{"x":0.650011400000011,"y":0.4999990000000025}]} />
<silkscreenpath route={[{"x":-0.6500113999999826,"y":-0.4999989999999883},{"x":0.650011400000011,"y":-0.4999989999999883}]} />
<silkscreenpath route={[{"x":0,"y":0.22860000000000014},{"x":0,"y":-0.2539999999999907}]} />
<silkscreentext text="{NAME}" pcbX="0.012573mm" pcbY="1.508mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.291527000000002,"y":0.7580000000000098},{"x":1.3166730000000086,"y":0.7580000000000098},{"x":1.3166730000000086,"y":-0.7325999999999908},{"x":-1.291527000000002,"y":-0.7325999999999908},{"x":-1.291527000000002,"y":0.7580000000000098}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C314264.obj?uuid=1c55af31f47d4d9db45f00e5a148cdf3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C314264.step?uuid=1c55af31f47d4d9db45f00e5a148cdf3",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.2132400000000142, y: -0.010919000000014195, z: -0.71 },
      }}
      {...props}
    />
  )
}
