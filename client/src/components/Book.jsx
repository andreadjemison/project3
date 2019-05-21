
import React, { Component } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'


class Book extends Component {
    state = {
        book: {
          name: 'The Alchemist',
          description: ' The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
          image: 'alchemist.jpg',
          author: 'Paul Coehen',
          price: 17.58,
        },
        isBookFormDisplayed: true
    }
    render() {
        return (
            <div className='single'>
        
                <h1>{this.state.book.name}</h1>
  
               <img src={`../img/${this.state.book.image}`} />

                <h1>{this.state.book.author}</h1>
              
            </div>
        )
      }
    }
export default Book
