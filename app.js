const express = require('express')
const app = express()
const port = 8000

const test = require('./models/testmodels.js')

// Start Controller
var mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})