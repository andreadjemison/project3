const express = require('express')
const app = express()
const logger = require('morgan')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))


app.use('/api/v1', routes)


booksroutes.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/public/index.html`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server working on ${PORT}`)
})