const DailyRecord = require('./dailyrecord')

DailyRecord.deleteMany()
  .then(() => {
    console.log('Deleted daily records')
})