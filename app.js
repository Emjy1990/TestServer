const express = require('express')
const app = express()
const port = 8000

const test = require('./models/testmodels.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})