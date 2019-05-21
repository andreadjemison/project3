const express = require('express')
const app = express()

const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const bookApi = require('./api/books')
const booksroutes = express.Router()
// let bookdb = require('./db/books')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', booksroutes)
app.use('/client/public', express.static("public"))
// app.use(express.static(`${__dirname}/client/build`))


// list of all books
booksroutes.route('/').get((req, res) => {
  bookApi.allBooks()
    .then(books => {
      res.json(books)
    })
})

// add new book
booksroutes.route('/new').post((req, res) => {
  let newbook = new Book(req.body)
  bookApi.newBook(newbook)
    // newbook.save()
    .then(book => {
      res.json(book)
    })

})

// show single book
booksroutes.route('/:id').get((req, res) => {
  bookApi.oneBook(req.params.id)
    .then(onebook => {
      res.json(onebook)
    })
})

// update single book
app.get('/:id', (req, res) => {
  bookApi.updateBook(req.params.id, req.body)
    .then(update => {
      res.send(update);
    })
})

// delete single book
app.get('/:id', (req, res) => {
  bookApi.deleteBook(req.params.id)
    .then(deletebook => {
      res.send(deletebook);
    })
})

// delete all book
booksroutes.route('/').delete((req, res) => {
  bookApi.deleteAll(req.params.id)
    .then(deletebook => {
      res.json(deletebook);
    })
})

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/public/index.html`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server working on ${PORT}`)
})