let book = require('../api/books.js')

let newBooks = [
    {
        name: 'The Alchemist',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Paul Coehen',
        price: 17.58,
    },{
        name: 'From the Browder File',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Anthony T. Browder',
        price: 17.58,
    },{
        name: 'Think and Grow Rich',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Napoleon Hill',
        price: 17.58,
    },{
        name: 'The Autobiography of Malcolm X',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Alex Haley',
        price: 17.58,
    },{
        name: 'The Art of War',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Sun Tzu',
        price: 17.58,
    },{
        name: 'As a Man Thinketh',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'James Allen',
        price: 17.58,
    },{
        name: 'How to Eat to Live',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Elijah Muhammad',
        price: 17.58,
    },{
        name: 'Green Power',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'AG Gaston',
        price: 17.89,
    },{
        name: 'A Message to the People',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Marcus Garvey',
        price: 17.58,
    },{
        name: 'African’s Gift to America',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'J A Rogers',
        price: 17.58,
    },{
        name: 'How to Win Friends and Influence People',
        description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
        image: 'alchemist.jpg',
        author: 'Dale Carnegie',
        price: 17.58,
    },
]
book.newBook(newBooks)
    .then(books => {
        console.log('Saved Books', books)
    })