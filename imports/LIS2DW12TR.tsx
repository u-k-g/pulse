import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["CS"],
  pin3: ["SDO", "SA0"],
  pin4: ["SDA"],
  pin5: ["NC"],
  pin6: ["GND2"],
  pin7: ["RES"],
  pin8: ["GND1"],
  pin9: ["VDD"],
  pin10: ["VDDIO"],
  pin11: ["INT2"],
  pin12: ["INT1"]
} as const

export const LIS2DW12TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C189624"
  ]
}}
      manufacturerPartNumber="LIS2DW12TR"
      footprint={<footprint>
        <smtpad portHints={["pin12"]} pcbX="-0.87503mm" pcbY="-0.249936mm" width="0.499999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.87503mm" pcbY="0.249936mm" width="0.499999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.750062mm" pcbY="0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.249936mm" pcbY="0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.249936mm" pcbY="0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.750062mm" pcbY="0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.87503mm" pcbY="0.249936mm" width="0.499999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.87503mm" pcbY="-0.249936mm" width="0.499999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.750062mm" pcbY="-0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.249936mm" pcbY="-0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.249936mm" pcbY="-0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.750062mm" pcbY="-0.87503mm" width="0.2800096mm" height="0.499999mm" shape="rect" />
<silkscreenpath route={[{"x":-1.2699999999999818,"y":-0.5080000000000382},{"x":-1.2699999999999818,"y":-1.1429999999999154},{"x":-1.0441178000000946,"y":-1.1429999999999154}]} />
<silkscreenpath route={[{"x":-1.0160000000000764,"y":1.143000000000029},{"x":-1.2699999999999818,"y":1.143000000000029},{"x":-1.2699999999999818,"y":0.5080000000000382}]} />
<silkscreenpath route={[{"x":1.2699999999999818,"y":-0.5080000000000382},{"x":1.2699999999999818,"y":-1.1429999999999154},{"x":1.0160000000000764,"y":-1.1429999999999154}]} />
<silkscreenpath route={[{"x":1.0160000000000764,"y":1.143000000000029},{"x":1.2699999999999818,"y":1.143000000000029},{"x":1.2699999999999818,"y":0.5080000000000382}]} />
<silkscreenpath route={[{"x":-0.6751319999999623,"y":-1.4574519999998756},{"x":-0.6776851778361106,"y":-1.4768453110493738},{"x":-0.6851707164944401,"y":-1.494916999999873},{"x":-0.6970784888857224,"y":-1.510435511114224},{"x":-0.7125969999999597,"y":-1.5223432835055064},{"x":-0.7306686889505727,"y":-1.5298288221638359},{"x":-0.7500620000000708,"y":-1.5323819999999841},{"x":-0.769455311049569,"y":-1.5298288221638359},{"x":-0.7875269999999546,"y":-1.5223432835055064},{"x":-0.8030455111143056,"y":-1.510435511114224},{"x":-0.8149532835055879,"y":-1.494916999999873},{"x":-0.8224388221639174,"y":-1.4768453110493738},{"x":-0.8249920000000657,"y":-1.4574519999998756},{"x":-0.8224388221639174,"y":-1.4380586889503775},{"x":-0.8149532835055879,"y":-1.419986999999992},{"x":-0.8030455111143056,"y":-1.404468488885641},{"x":-0.7875269999999546,"y":-1.3925607164943585},{"x":-0.769455311049569,"y":-1.385075177836029},{"x":-0.7500620000000708,"y":-1.3825219999998808},{"x":-0.7306686889505727,"y":-1.385075177836029},{"x":-0.7125969999999597,"y":-1.3925607164943585},{"x":-0.6970784888857224,"y":-1.404468488885641},{"x":-0.6851707164944401,"y":-1.419986999999992},{"x":-0.6776851778361106,"y":-1.4380586889503775},{"x":-0.6751319999999623,"y":-1.4574519999998756}]} />
<silkscreentext text="{NAME}" pcbX="-0.004064mm" pcbY="2.132332mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.524063999999953,"y":1.3823320000000194},{"x":1.515935999999897,"y":1.3823320000000194},{"x":1.515935999999897,"y":-1.7846680000000106},{"x":-1.524063999999953,"y":-1.7846680000000106},{"x":-1.524063999999953,"y":1.3823320000000194}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C189624.obj?uuid=83ec6157b4954879af30009d604f164f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C189624.step?uuid=83ec6157b4954879af30009d604f164f",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
