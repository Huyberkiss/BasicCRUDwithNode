const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: { type: String },
    type: { type: String }
})

module.exports = mongoose.model('product', Product)