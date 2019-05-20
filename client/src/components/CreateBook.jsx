import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import '../App.css'


class CreateBook extends Component {
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

  componentDidMount = () => {
    axios.get('/').then(res => {
        console.log(res.data)
        this.setState({books: res.data})

    })
  }


  handleChange = (e) => {
    const cloneNewBook = {...this.state.newBook}
    cloneNewBook[e.target.name] = e.target.value
    this.setState({newBook: cloneNewBook})
  }

  createBook = (e) => {
    e.preventDefault()
    axios.post('/books', {
            name: this.state.newBook.name,
            description: this.state.newBook.description,
            image:  this.state.newBook.image,
            author:  this.state.newBook.author,
            price:  this.state.newBook.price,
        })
        .then(res => {
            const BooksList = [...this.state.books]
            BooksList.unshift(res.data)
            this.setState({
                newBook: {
                    name: '',
                    description: '',
                    image: '',
                    author: '',
                    price: '',
                },
                isBookFormDisplayed: true,
                books: BooksList 
            })
        })

  }

  render() {
    return (
      <div className="createnew">
<h1>Add New Book</h1>
                <form onSubmit={this.createBook}>
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
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.newBook.description}
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
                    <div>
                    <input type="submit" value="Add New Book" />
                    </div>
                </form>
                
      </div>
    )
  }
}

export default CreateBook
