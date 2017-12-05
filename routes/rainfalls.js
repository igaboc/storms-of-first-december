const express = require('express')
const Rainfall = require('../models/rainfall')

const router = express.Router()

// router.get('/rainfalls', (req, res) => {
//     const rainfalls = Rainfall.all()
//     res.json("rainfalls")
//   })

  router.get('/rainfalls', (req, res) => {
    Rainfall.find()
      .then((rainfalls) => {
          res.json(rainfalls)
      })
  })

  router.get('/rainfalls/:id', (req,res) => {
    const id = req.params.id
    Rainfall.findById(id)
      .then((rainfall) => {
          if (rainfall) {
            res.json(rainfall)
          }
          else {
              res.status(404).json({ error: `Rainfall not found with id: '${id}'`})
          }
      })
      .catch((error) => {
          res.status(400).json({ error: error.message })
      })
})

// Create

router.post('/rainfalls', (req,res) => {
    const attributes = req.body
    Rainfall.create(attributes)
      .then((rainfall) => {
          // Success
        res.status(201).json(rainfall)
      })
      .catch((error) => {
          // Failure
        res.status(400).json({ error: error })
      })
  })

// Update
router.patch('/rainfalls/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Rainfall.findByIdAndUpdate(id, changes)
      .then((rainfall) => {
        res.status(401).json(rainfall)
      })
      .catch((error) => {
        res.status(404).json({ error: `The rainfall with id '${id}' was not found` }) 
      })
})

// Destroy
router.delete('/rainfalls/:id', (req, res) => {
    const id = req.params.id
    Rainfall.findByIdAndRemove(id)
      .then((rainfall) => {
          res.json(rainfall)
      })
      .catch((error) => {
          res.status(404).json({ error: `The rainfall with id '${id}' was not found` }) 
      })
})

module.exports = router