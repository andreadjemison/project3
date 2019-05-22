const express = require('express')
const app = express()

const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use('/img', express.static('img'))

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
app.use(express.static(`${__dirname}/client/build`))


// list of all books

booksroutes.get('/', (req, res) => {
  bookApi.allBooks()
    .then(books => {
      res.send(books)
    })
})


// add new book

booksroutes.post('/new', (req, res) => {
  let newbook = req.body
  bookApi.newBook(newbook)
    newbook.save()
    .then(newbook => {
      res.send(newbook)
    })
})


// show single book

booksroutes.get('/:id', (req, res) => {
  bookApi.oneBook(req.params.id)
    .then(onebook => {
      res.send(onebook)
    })
})

// update single book
booksroutes.put('/:id', (req, res) => {
  bookApi.updateBook(req.params.id, req.body)
    .then(update => {
      res.send(update);
    })
})

// delete single book
booksroutes.delete('/:id', (req, res) => {
  bookApi.deleteBook(req.params.id)
    .then(deletebook => {
      res.json({deletebook});
    })
})

// delete all book
booksroutes.delete('/', (req, res) => {
  bookApi.deleteAll(req.params.id)
    .then(deleteall => {
      res.json(deleteall);
    })
})

// booksroutes.route('/').delete((req, res) => {
//   bookApi.deleteAll(req.params.id)
//     .then(deleteall => {
//       res.json(deleteall);
//     })
// })

booksroutes.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/public/index.html`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server working on ${PORT}`)
})