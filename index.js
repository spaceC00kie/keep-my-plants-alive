const express = require("express")
const app = express()
const PORT = 8080

app.listen(PORT, () => console.log("Boozy testing"))

app.use(express.json())

app.get("/cider", (req, res) => {
  res.status(200).send({
    drink: "yummy",
    alcohol: "yes",
    consume: "as needed",
  })
})
