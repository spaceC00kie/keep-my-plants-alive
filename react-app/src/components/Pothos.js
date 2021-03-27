import React, { useEffect, useState } from "react"
import GaugeChart from "react-gauge-chart"
import "../App.css"
import { Button } from "@material-ui/core"

const Pothos = () => {
  const [sensor1, setSensor1] = useState(0.5)
  const [sensor2, setSensor2] = useState(0.5)

  const getSoilSensor = () => {
    fetch("http://10.0.0.6:8080/sensor")
      .then(res => res.json())
      .then(i => {
        setSensor1(i.is1Wet ? 1.0 : 0.0)
        setSensor2(i.is2Wet ? 1.0 : 0.0)
      })
  }

  useEffect(getSoilSensor, [])

  const chartStyle = {
    height: "100%",
  }

  return (
    <div className="gauge">
      <Button
        onClick={() => getSoilSensor()}
        style={{ backgroundColor: "#76ed72" }}
      >
        Check again
      </Button>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={7}
        colors={["#fcf644", "#44edfc"]}
        arcWidth={0.4}
        percent={sensor1}
        style={chartStyle}
        textColor="#b445f5"
        needleColor="#d08df7"
        needleBaseColor="#5f2382"
        cornerRadius={30}
        arcPadding={0.03}
      />
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={7}
        colors={["#fcf644", "#44edfc"]}
        arcWidth={0.4}
        percent={sensor2}
        style={chartStyle}
        textColor="#b445f5"
        needleColor="#d08df7"
        needleBaseColor="#5f2382"
        cornerRadius={30}
        arcPadding={0.03}
      />
    </div>
  )
}

export default Pothos
