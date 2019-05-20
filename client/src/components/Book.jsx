// import React, {Component} from 'react'
// // import { addFavoriteMovie } from './util.js'

// class Book extends Component {

// //   addFavorite = () => {
// //     //TODO: add favorite movie
// //     addFavoriteMovie()
// //     // .then(favoriteAdded =>{
// //     //   console.log(favoriteAdded)
// //       // this.setState({...this.state.favorites
// //       // })
// //     // })
// //   }

//   render() {
//     return (
//       <div className="result">
// <h1>Whats up</h1>
//       </div>
//     )
//   }
// }
// export default Book

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

class Book extends Component {
    state = {
        books: [],
        newBook: {
          name: '',
          description: '',
          image: '',
          author: '',
          price: '',
        },
        isBookFormDisplayed: false
    }

  componentDidMount = () => {
    axios.get('/books/:id').then(res => {
        this.setState({books: res.data})
    })
  }

//   toggleBookForm = () => {
//       this.setState((state, props) => {
//           return ({isBookFormDisplayed: !state.isBookFormDisplayed})
//       })
//   }

  handleChange = (e) => {
    const cloneNewBook = {...this.state.newBook}
    cloneNewBook[e.target.name] = e.target.value
    this.setState({newBook: cloneNewBook})
  }

  Book = (e) => {
    e.preventDefault()
    axios
        .post('/books/:id', {
            name: this.state.newBook.name,
            description: this.state.newBook.description,
            image:  this.state.newBook.image,
            author:  this.state.newBook.author,
            price:  this.state.newBook.price,
        })
        .then(res => {
            const booksList = [...this.state.Books]
            booksList.unshift(res.data)
            this.setState({
                newBook: {
                    name: '',
                    description: '',
                    image: '',
                    author: '',
                    price: '',
                },
                isBookFormDisplayed: false,
                books: booksList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        {
            this.state.Books.map(Book => {
                return (
                    <div key={Book._id}>
                        <Link
                            to={`/${Book._id}`}
                        >
                            {Book.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggleBookForm}>+ New Book</button>
        {this.state.isBookFormDisplayed
                ? <form onSubmit={this.Book}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newBook.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="decription">Decription</label>
                        <input
                            id="decription"
                            type="text"
                            name="decription"
                            onChange={this.handleChange}
                            value={this.state.newBook.decription}
                        />
                    </div>
                    <div>
                    <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.newBook.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input
                            id="author"
                            type="text"
                            name="author"
                            onChange={this.handleChange}
                            value={this.state.newBook.author}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            type="number"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.newBook.price}
                        />
                    </div>
                    <button>Book</button>
                </form>
                : null
        }
      </div>
    )
  }
}

export default Book
