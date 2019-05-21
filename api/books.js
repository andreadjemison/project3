const mongoose = require('../db/connection.js')

const books = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    author: String,
    price: Number
})

let bookCollection = mongoose.model('Books', books)

// book functions

const allBooks = () => {
    return bookCollection.find()
}
const newBook = (newbook) => {
    return bookCollection.create(newbook)
}
const oneBook = (book) => {
    return bookCollection.findById(book)
}
const updateBook = (book, id) => {
    return bookCollection.findOneAndUpdate(book, id)
}
const deleteBook = (id) => {
    return bookCollection.findByIdAndRemove(id)
}
const deleteAll = (books) => {
    return bookCollection.deleteMany(books)
}
module.exports = {
    allBooks,
    newBook,
    oneBook,
    updateBook,
    deleteBook,
    deleteAll
}
