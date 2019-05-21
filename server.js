const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const bookApi = require('./api/books')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/client/public', express.static("public"))
// app.use(express.static(`${__dirname}/client/build`))


// list of all books
app.get('/',(req, res)=>{
    bookApi.allBooks()
    .then(books => {
      res.send(books);
    })
})
// add new book
app.get('/new',(req, res)=>{
    bookApi.newBook(req.body)
    .then(() => {
      res.redirect(`/`);
    })
})
// show single book
app.get('/:id',(req, res)=>{
    bookApi.oneBook(req.params.id)
    .then(onebook => {
      res.send(onebook);
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

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server working on ${PORT}`)
})