require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
const Books = require('../models/Book.js')


Books.deleteMany()
    .then(() => {
        const alchemist = new Books({
            name: 'The Alchemist',
            description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
            img: 'alchemist.jpg',
            author: 'Paul Coehen',
            price: 17.58
        })
        return alchemist.save()
    })
    .then(() => {
        const browder = new Books({
            name: 'From the Browder File',
            description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
            img: 'browderfile.jpg',
            author: 'Anthony T. Browder',
            price: 37.58
        })
        return browder.save()
    })