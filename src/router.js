import express from 'express'
const router = express.Router()

router.get('/', function(req, res) {
  res.json('Using Router')
})

export default router
