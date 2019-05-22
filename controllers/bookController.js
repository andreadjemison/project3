const Book = require('../models/Book.js')

const bookController = {
    index: async (req, res) => {
        try {
            const books = await Book.find()
            res.json(books)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const id = req.params.id
            const book = await Book.findById(id)
            res.send(book)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newbook = req.body
          console.log(newbook)
          const savedbook = await Book.create(newbook)
          res.json(savedbook)
        } 
        catch (err) {
          console.log(err)
          res.status(500).send(err)
        }
    },
    update: async (req, res) => {
        try {
          const bookid = req.params.id
          const updatedbook = req.body
          const savedbook = await Book.findByIdAndUpdate(bookid, updatedbook, {new: true})
          res.json(savedbook)
        }
        catch (err) {
          console.log(err)
          res.status(500).send(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const bookid = req.params.id
          const deletedbook = await Book.findByIdAndRemove(bookid)
          res.json(deletedbook)
        }
        catch (err) {
          console.log(err)
          res.status(500).send(err)
        }
    }
}

module.exports = bookController