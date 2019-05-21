const express = require('express')
const app = express()

const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const bookApi = require('./api/books')
const booksroutes = express.Router()
// let bookdb = require('./db/books')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', booksroutes)
app.use('/client/public', express.static("public"))
// app.use(express.static(`${__dirname}/client/build`))


// list of all books
// app.get('/',(req, res)=>{
//     bookApi.allBooks()
//     .then(books => {
//       res.send(books)
//     })
// })

booksroutes.route('/').get((req, res)=> {
  bookApi.allBooks()
  .then(books => {
    res.json(books)
  })
})

// add new book
// booksroutes.route('/new').post((req, res)=>{
//   let newbook = new Book(req.body)
//     bookApi.newBook(newbook.save())
//     .then(() => {
//       res.redirect(`/`)
//     })
// })
// show single book
// app.get('/:id',(req, res)=>{
//     bookApi.oneBook(req.params.id)
//     .then(onebook => {
//       res.send(onebook);
//     })
// })
booksroutes.route('/:id').get((req, res)=> {
  bookApi.oneBook(req.params.id)
  .then(book => {
    res.json(book)
  })
})
// update single book
app.get('/:id',(req, res)=>{
    bookApi.updateBook(req.params.id, req.body)
    .then(update => {
      res.send(update);
    })
})

// delete single book
app.get('/:id',(req, res)=>{
    bookApi.deleteBook(req.params.id)
    .then(deletebook => {
      res.send(deletebook);
    })
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/public/index.html`)
})
// const eraseDatabaseOnSync = true
// bookdb().then(async ()=>{
//   if (eraseDatabaseOnSync) {
//     await Promise.all([
//       bookApi.deleteAll({})
//       // models.Message.deleteMany({}),
//     ])

// }})
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server working on ${PORT}`)
})