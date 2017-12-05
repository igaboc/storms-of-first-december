// Ensure we have the connection to the database
const mongoose = require('./init')

// Define our model
const City = mongoose.model('City', { 
    name: {
        type: String
    }
});

module.exports = City