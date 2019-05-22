const express = require('express')
const app = express()
const logger = require('morgan')
const routes = require('./routes/index')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))
app.use('/api/v1', routes)


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server working on ${PORT}`)
})