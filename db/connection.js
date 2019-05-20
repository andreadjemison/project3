require('dotenv').config()

// requirements: import mongoose
const mongoose = require('mongoose')

const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/bog1'
mongoose.connect(dbConnection, { useNewUrlParser: true})
  .then(() => {
    console.log("mongo works");
  })

// export your mongoose connection
module.exports = mongoose;