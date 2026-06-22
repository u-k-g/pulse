import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["FEED"],
  pin2: ["NC"]
} as const

export const A_2450AT18B100E = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2917717"
  ]
}}
      manufacturerPartNumber="A_2450AT18B100E"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.578102mm" pcbY="0mm" width="0.999998mm" height="1.7500092mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.578102mm" pcbY="0mm" width="0.999998mm" height="1.7500092mm" shape="rect" />
<silkscreenpath route={[{"x":-0.7619999999998299,"y":0.2540000000000191},{"x":-0.7619999999998299,"y":-0.2539999999999054},{"x":-0.2539999999999054,"y":-0.2539999999999054},{"x":-0.2539999999999054,"y":0.2540000000000191},{"x":-0.7619999999998299,"y":0.2540000000000191}]} />
<silkscreenpath route={[{"x":-1.6759935999999698,"y":1.059967400000005},{"x":1.6759936000000835,"y":1.0499852000000374}]} />
<silkscreenpath route={[{"x":1.5240000000001146,"y":-1.0500105999999505},{"x":-1.6759428000000298,"y":-1.0499852000000374}]} />
<silkscreentext text="{NAME}" pcbX="-0.000254mm" pcbY="2.0668mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.3330539999998336,"y":1.3167999999999438},{"x":2.3325459999999794,"y":1.3167999999999438},{"x":2.3325459999999794,"y":-1.291400000000067},{"x":-2.3330539999998336,"y":-1.291400000000067},{"x":-2.3330539999998336,"y":1.3167999999999438}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2917717.obj?uuid=cbaa998426f54032b453ce6fafc2cd5a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2917717.step?uuid=cbaa998426f54032b453ce6fafc2cd5a",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -0.65 },
      }}
      {...props}
    />
  )
}
