const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/Shopping_dev'

const connect = async () => {

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('Successfully')
    } catch (error) {

    }
}

module.exports = { connect }