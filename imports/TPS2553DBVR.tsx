import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["FAULT"],
  pin5: ["ILIM"],
  pin6: ["OUT"]
} as const

export const TPS2553DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={{
        IN: { requiresPower: true },
        OUT: { requiresPower: true },
        GND: { requiresGround: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C55266"
  ]
}}
      manufacturerPartNumber="TPS2553DBVR"
      footprint={<footprint>
        <smtpad portHints={["pin3"]} pcbX="1.35001mm" pcbY="0.94996mm" width="1.0999978mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.35001mm" pcbY="-0mm" width="1.0999978mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="1.35001mm" pcbY="-0.94996mm" width="1.0999978mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.35001mm" pcbY="-0.94996mm" width="1.0999978mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.35001mm" pcbY="-0mm" width="1.0999978mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.35001mm" pcbY="0.94996mm" width="1.0999978mm" height="0.5999988mm" shape="rect" />
<silkscreenpath route={[{"x":-0.899998200000141,"y":1.5499080000000731},{"x":0.9000236000000541,"y":1.5499080000000731}]} />
<silkscreenpath route={[{"x":-0.899998200000141,"y":-1.5501111999999466},{"x":0.9000236000000541,"y":-1.5501111999999466}]} />
<silkscreenpath route={[{"x":1.5240000000001146,"y":-1.6510000000000673},{"x":1.5196725799386286,"y":-1.6838700187280438},{"x":1.5069852262805625,"y":-1.7145000000000437},{"x":1.4868025612107658,"y":-1.740802561210785},{"x":1.4604999999999109,"y":-1.7609852262806953},{"x":1.4298700187280247,"y":-1.7736725799387614},{"x":1.3969999999999345,"y":-1.77800000000002},{"x":1.3641299812720717,"y":-1.7736725799387614},{"x":1.3334999999999582,"y":-1.7609852262806953},{"x":1.3071974387893306,"y":-1.740802561210785},{"x":1.2870147737194202,"y":-1.7145000000000437},{"x":1.2743274200612404,"y":-1.6838700187280438},{"x":1.2699999999999818,"y":-1.6510000000000673},{"x":1.2743274200612404,"y":-1.6181299812719772},{"x":1.2870147737194202,"y":-1.5874999999999773},{"x":1.3071974387893306,"y":-1.5611974387893497},{"x":1.3334999999999582,"y":-1.541014773719553},{"x":1.3641299812720717,"y":-1.5283274200613732},{"x":1.3969999999999345,"y":-1.524000000000001},{"x":1.4298700187280247,"y":-1.5283274200613732},{"x":1.4604999999999109,"y":-1.541014773719553},{"x":1.4868025612107658,"y":-1.5611974387893497},{"x":1.5069852262805625,"y":-1.5874999999999773},{"x":1.5196725799386286,"y":-1.6181299812719772},{"x":1.5240000000001146,"y":-1.6510000000000673}]} />
<silkscreentext text="{NAME}" pcbX="0.012446mm" pcbY="2.562354mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.1425540000000183,"y":1.8123540000000276},{"x":2.167445999999927,"y":1.8123540000000276},{"x":2.167445999999927,"y":-2.015045999999984},{"x":-2.1425540000000183,"y":-2.015045999999984},{"x":-2.1425540000000183,"y":1.8123540000000276}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C55266.obj?uuid=229b69761e2c45dba6a83d8866dec72d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C55266.step?uuid=229b69761e2c45dba6a83d8866dec72d",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000025399999913133797, y: -0.0000889000000370288, z: -0.048939 },
      }}
      {...props}
    />
  )
}
