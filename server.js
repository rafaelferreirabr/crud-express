import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json('Hello World!')
})

app.listen(port, function () {
  console.log(`App listening on port ${port}`)
})
