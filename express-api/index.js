const Gpio = require("onoff").Gpio
const express = require("express")
const app = express()
var cors = require("cors")

const sensor1 = new Gpio(2, "in")
const sensor2 = new Gpio(23, "in")

const PORT = 8080

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log("Boozy testing"))

app.get("/sensor", (req, res) => {
  res.status(200).send({
    is1Wet: !sensor1.readSync(),
    is2Wet: !sensor2.readSync(),
  })
})
