const mongoose = require('../db/connection')

const Books = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    img: String,
    price: Number
})
module.exports =  mongoose.model('Books', Books)

