const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController.js')
const kidController = require('../controllers/kidController.js')

router.get('/books', bookController.index)
router.post('/books', bookController.create)
router.get('/books/:id', bookController.show)
router.put('/books/:id', bookController.update)
router.delete('/books/:id', bookController.delete)


router.get('/kids', kidController.index)
router.post('/kids', kidController.create)
router.get('/kids/:id', kidController.show)
router.put('/kids/:id', kidController.update)
router.delete('/kids/:id', kidController.delete)

module.exports = router