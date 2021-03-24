import React, { useEffect, useState } from "react"
import GaugeChart from "react-gauge-chart"

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

  return (
    <div>
      {sensor1} <br />
      {sensor2} <br />
      <button onClick={() => getSoilSensor()}>Update</button>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        arcWidth={0.3}
        percent={0.37}
      />
    </div>
  )
}

export default Pothos
