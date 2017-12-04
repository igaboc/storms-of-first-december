const express = require('express')

const server = express()

// Plugins
server.use(bodyParser.json()) // Allows me to have JSPn uploads (POST/PUT/PATCH)

// Routes
server.use([
    require('./routes/artists')
])

server.listen(7000, (error) => {
    console.log('Started at http://localhost:7000')
  })