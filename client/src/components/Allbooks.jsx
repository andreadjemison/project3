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
      <h1>All Books</h1>
      <div className="bookcontainer">
        {this.state.books.map(Book => {
                return (
                    <div key={Book._id}>
                        <Link
                            to={`/${Book._id}`}
                        >
                        {Book.image}
                            {Book.name}
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