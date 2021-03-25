import React, { useEffect, useState } from "react"
import GaugeChart from "react-gauge-chart"
import "../App.css"

const Pothos = () => {
  const [sensor1, setSensor1] = useState("")
  const [sensor2, setSensor2] = useState("")

  const getSoilSensor = () => {
    fetch("http://10.0.0.6:8080/sensor")
      .then(res => res.json())
      .then(i => {
        setSensor1(i.is1Wet ? "wet" : "dry")
        setSensor2(i.is2Wet ? "wet" : "dry")
      })
  }

  useEffect(getSoilSensor, [])

  const chartStyle = {
    height: "50%",
  }

  return (
    <div className="gauge">
      {sensor1} <br />
      {sensor2} <br />
      <button onClick={() => getSoilSensor()}>Update</button>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={7}
        colors={["#fcf644", "#44edfc"]}
        arcWidth={0.5}
        percent={0.8}
        style={chartStyle}
        textColor="#000000"
        cornerRadius={15}
        arcPadding={0.02}
      />
    </div>
  )
}

export default Pothos
