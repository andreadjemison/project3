import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Allbooks extends Component {
    state = {
        books: [],
        newBook: {
          name: '',
          description: '',
          image: '',
          author: '',
          price: '',
        },
        isBookFormDisplayed: true
    }
    render(){
        return(
    <div className="allbooks"> 
      <h1>Book Catalogue</h1>
      <div className="bookcontainer">
        {this.state.books.map((book, i) => {
                return (
                    <div key={book._id} index={i}>
                        <Link to={`/${book._id}`}>
                        {book.image} <br/>
                        {book.name}
                        </Link>
                    </div>
                )
            })
        }
        </div>
        </div>
        )
    }
}
export default Allbooks