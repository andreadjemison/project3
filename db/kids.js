require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
const Kids = require('../models/Kid.js')


Kids.deleteMany()
    .then(() => {
        const tarbeach = new Kids({
            name: 'Tar Beach',
            description: 'Ringgold recounts the dream adventure of eight-year-old Cassie Louise Lightfoot, who flies above her apartment-building rooftop, the \'tar beach\' of the title, looking down on 1939 Harlem. Part autobiographical, part fictional, this allegorical tale sparkles with symbolic and historical references central to African-American culture. ',
            img: 'tarbeach.jpg',
            author: 'Faith Ringgold',
            price: 23.64
        })
        return tarbeach.save()
    })
    .then(() => {
        const browder = new Kids({
            name: 'The Book Itch',
            description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
            img: 'bookitch.jpg',
            author: 'Vaunda Micheaux Nelson',
            price: 19.28
        })
        return browder.save()
    })
