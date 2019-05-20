const express = require('express')
const app = express()
const logger = require('morgan')
// const bodyParser = require('body-parser')
// const reactViews = require('express-react-views')
const bookApi = require('./api/books')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(bodyParser)
app.use('/client/public', express.static("public"))
// app.use(express.static(`${__dirname}/client/build`))
// app.set('view engine', 'jsx')

// app.engine('jsx', reactViews.createEngine());


app.get('/',(req, res)=>{
    bookApi.allBooks(req.query.q)
    .then(books => {
      res.send(books);
    })
})

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/client/public/index.html`)
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server working on ${PORT}`)
})