const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())


const chefsData = require('./data/chefsDat.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs',(req,res) => {
  res.send(chefsData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})