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
app.get('/chefsDetails/:id',(req,res) => {
  const id = parseInt(req.params.id);
  const chefDetails = chefsData.find(chef => parseInt(chef.id)  === id)
  res.send(chefDetails);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})