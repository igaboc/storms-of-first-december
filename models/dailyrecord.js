const mongoose = require('./init')

const DailyRecord = mongoose.model('DailyRecord', { 
    date: {
        type: Date,
        required: false,
        unique: false,
        default: Date.now
    },
    amount: {
        type: Number
        // required: true
    },
    city: {
        type: String
    }
});

module.exports = DailyRecord