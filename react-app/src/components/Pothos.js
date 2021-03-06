import React, { useEffect, useState } from "react"

const Pothos = () => {
  const [cider, setCider] = useState("")

  const another = () => {
    fetch("http://localhost:8080/cider")
      .then(res => res.json())
      .then(i => setCider(i.drink))
  }

  useEffect(another, [])

  return (
    <div>
      {cider} <br />
      <button onClick={() => another()}>See more</button>
    </div>
  )
}

export default Pothos
