const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController.js')

router.get('/books', bookController.index)
router.post('/books', bookController.create)
router.get('/books/:id', bookController.show)
router.put('/books/:id', bookController.update)
router.delete('/books/:id', bookController.delete)

module.exports = router