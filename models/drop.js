const Rainfall = require('./rainfall')

Rainfall.deleteMany()
  .then(() => {
    console.log('Deleted rainfall records')
})