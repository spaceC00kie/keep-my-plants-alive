import React, { useEffect, useState } from "react"

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
    </div>
  )
}

export default Pothos
