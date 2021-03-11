const express = require("express")
const app = express()
var cors = require("cors")
const PORT = 8080

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log("Boozy testing"))

app.get("/cider", (req, res) => {
  res.status(200).send({
    drink: "yummy",
    alcohol: "yes",
    consume: "as needed",
  })
})
