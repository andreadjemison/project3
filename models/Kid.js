const mongoose = require('../db/connection')

const Kids = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    img: String,
    price: Number
})
module.exports =  mongoose.model('Kids', Kids)
