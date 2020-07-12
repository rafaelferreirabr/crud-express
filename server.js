import express from 'express'
import bodyParser from 'body-parser'
import router from './src/router.js'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(router)

app.listen(port, function() {
  console.log(`App listening on port ${port}`)
})
