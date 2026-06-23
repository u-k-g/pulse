import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["GND"],
  pin3: ["A"],
  pin4: ["B"],
  pin5: ["DIR"],
  pin6: ["VCCB"]
} as const

export const SN74AXC1T45DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={{
        VCCA: { requiresPower: true },
        VCCB: { requiresPower: true },
        GND: { requiresGround: true },
      }}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2677392"
  ]
}}
      manufacturerPartNumber="SN74AXC1T45DCKR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.649986mm" pcbY="-0.94996mm" width="0.3640074mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-0.94996mm" width="0.3640074mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.649986mm" pcbY="-0.94996mm" width="0.3640074mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.649986mm" pcbY="0.94996mm" width="0.3640074mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="0.94996mm" width="0.3640074mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.649986mm" pcbY="0.94996mm" width="0.3640074mm" height="0.6500114mm" shape="rect" />
<silkscreenpath route={[{"x":-1.076198000000005,"y":-0.7011924000000107},{"x":-1.076198000000005,"y":0.7011923999999965}]} />
<silkscreenpath route={[{"x":1.076198000000005,"y":-0.7011924000000107},{"x":1.076198000000005,"y":0.7011923999999965}]} />
<silkscreenpath route={[{"x":-1.227581999999984,"y":-0.9273540000000082},{"x":-1.2301351778361607,"y":-0.9467473110495348},{"x":-1.237620716494419,"y":-0.9648190000000056},{"x":-1.2495284888856872,"y":-0.9803375111143282},{"x":-1.2650469999999956,"y":-0.9922452835055822},{"x":-1.2831186889504522,"y":-0.9997308221638406},{"x":-1.302511999999993,"y":-1.0022840000000173},{"x":-1.3219053110495338,"y":-0.9997308221638406},{"x":-1.3399769999999904,"y":-0.9922452835055822},{"x":-1.3554955111142988,"y":-0.9803375111143282},{"x":-1.367403283505567,"y":-0.9648190000000056},{"x":-1.3748888221638396,"y":-0.9467473110495348},{"x":-1.377442000000002,"y":-0.9273540000000082},{"x":-1.3748888221638396,"y":-0.9079606889504817},{"x":-1.367403283505567,"y":-0.8898890000000108},{"x":-1.3554955111142988,"y":-0.8743704888857025},{"x":-1.3399769999999904,"y":-0.8624627164944485},{"x":-1.3219053110495338,"y":-0.8549771778361759},{"x":-1.302511999999993,"y":-0.8524240000000134},{"x":-1.2831186889504522,"y":-0.8549771778361759},{"x":-1.2650469999999956,"y":-0.8624627164944485},{"x":-1.2495284888856872,"y":-0.8743704888857025},{"x":-1.237620716494419,"y":-0.8898890000000108},{"x":-1.2301351778361607,"y":-0.9079606889504817},{"x":-1.227581999999984,"y":-0.9273540000000082}]} />
<silkscreentext text="{NAME}" pcbX="-0.1397mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.6215999999999866,"y":1.519999999999996},{"x":1.3422000000000196,"y":1.519999999999996},{"x":1.3422000000000196,"y":-1.5200000000000102},{"x":-1.6215999999999866,"y":-1.5200000000000102},{"x":-1.6215999999999866,"y":1.519999999999996}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2677392.obj?uuid=b6cf75e0a94f4e249567d5af8d8ded64",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2677392.step?uuid=b6cf75e0a94f4e249567d5af8d8ded64",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000013410317, z: -0.5 },
      }}
      {...props}
    />
  )
}
