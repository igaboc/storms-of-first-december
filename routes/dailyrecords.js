const express = require('express')
const DailyRecord = require('../models/dailyrecord')

const router = express.Router()

// router.get('/rainfalls', (req, res) => {
//     const rainfalls = Rainfall.all()
//     res.json("rainfalls")
//   })

  router.get('/dailyrecords', (req, res) => {
    DailyRecord.find()
      .then((dailyRecords) => {
          res.json(dailyRecords)
      })
  })

module.exports = router