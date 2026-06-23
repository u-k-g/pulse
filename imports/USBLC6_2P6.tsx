import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["VBUS"],
  pin6: ["pin6"]
} as const

export const USBLC6_2P6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={{
        VBUS: { requiresPower: true },
        GND: { requiresGround: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2827693"
  ]
}}
      manufacturerPartNumber="USBLC6_2P6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.499999mm" pcbY="-0.750062mm" width="0.299974mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.000127mm" pcbY="-0.750062mm" width="0.299974mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.499999mm" pcbY="-0.750062mm" width="0.299974mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.499999mm" pcbY="0.750062mm" width="0.2999994mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.000127mm" pcbY="0.750062mm" width="0.2999994mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.499999mm" pcbY="0.750062mm" width="0.2999994mm" height="0.499999mm" shape="rect" />
<silkscreenpath route={[{"x":0.8760714000000007,"y":-0.6761987999999519},{"x":0.8760714000000007,"y":0.6761988000000656}]} />
<silkscreenpath route={[{"x":-0.8763254000000416,"y":-0.6761987999999519},{"x":-0.8763254000000416,"y":0.6761988000000656}]} />
<silkscreenpath route={[{"x":-1.0113010000001168,"y":-0.9083040000000437},{"x":-1.0147110070083727,"y":-0.9342055747576978},{"x":-1.0247086416909497,"y":-0.958342000000016},{"x":-1.0406125817660268,"y":-0.9790684182340783},{"x":-1.0613389999999754,"y":-0.9949723583091554},{"x":-1.0854754252424073,"y":-1.0049699929917324},{"x":-1.1113770000000613,"y":-1.0083799999999883},{"x":-1.1372785747577154,"y":-1.0049699929917324},{"x":-1.1614150000000336,"y":-0.9949723583091554},{"x":-1.182141418234096,"y":-0.9790684182340783},{"x":-1.198045358309173,"y":-0.958342000000016},{"x":-1.20804299299175,"y":-0.9342055747576978},{"x":-1.2114530000000059,"y":-0.9083040000000437},{"x":-1.20804299299175,"y":-0.882402425242276},{"x":-1.198045358309173,"y":-0.8582659999999578},{"x":-1.182141418234096,"y":-0.8375395817660092},{"x":-1.1614150000000336,"y":-0.8216356416908184},{"x":-1.1372785747577154,"y":-0.8116380070082414},{"x":-1.1113770000000613,"y":-0.8082280000000992},{"x":-1.0854754252424073,"y":-0.8116380070082414},{"x":-1.0613389999999754,"y":-0.8216356416908184},{"x":-1.0406125817660268,"y":-0.8375395817660092},{"x":-1.0247086416909497,"y":-0.8582659999999578},{"x":-1.0147110070083727,"y":-0.882402425242276},{"x":-1.0113010000001168,"y":-0.9083040000000437}]} />
<silkscreentext text="{NAME}" pcbX="-0.177927mm" pcbY="1.9906mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.4693270000001348,"y":1.2406000000000859},{"x":1.1134729999998854,"y":1.2406000000000859},{"x":1.1134729999998854,"y":-1.2659999999999627},{"x":-1.4693270000001348,"y":-1.2659999999999627},{"x":-1.4693270000001348,"y":1.2406000000000859}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2827693.obj?uuid=2f83ac3d23f34d74addd6042b9238491",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2827693.step?uuid=2f83ac3d23f34d74addd6042b9238491",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: -0.00012700000002041634, z: 0 },
      }}
      {...props}
    />
  )
}
