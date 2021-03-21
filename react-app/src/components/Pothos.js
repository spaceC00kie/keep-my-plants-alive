import React, { useEffect, useState } from "react"

const Pothos = () => {
  const [cider, setCider] = useState("")

  const another = () => {
    fetch("http://10.0.0.6:8080/sensor")
      .then(res => res.json())
      .then(i => setCider(i.is1Wet ? "wet" : "dry"))
  }

  useEffect(another, [])

  return (
    <div>
      {cider} <br />
      <button onClick={() => another()}>Update</button>
    </div>
  )
}

export default Pothos
