import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

class Books extends Component {
    state = {
        books: [],
        newBook: {
            name: '',
            description: '',
            img: '',
            author: '',
            price: '',
        },
        isBookFormDisplayed: false
    }
    componentDidMount() {
        axios.get('/api/v1/books')
            .then(res => {
                this.setState({ books: res.data })
            })

    }

    toggleBookForm = () => {
        this.setState((state, props) => {
            return ({ isBookFormDisplayed: !state.isBookFormDisplayed })
        })
    }

    handleChange = (e) => {
        const cloneNewBook = { ...this.state.newBook }
        cloneNewBook[e.target.name] = e.target.value
        this.setState({ newBook: cloneNewBook })
    }

    createBook = (e) => {
        // e.preventDefault()
        axios.post('/api/v1/books', {
                name: this.state.newBook.name,
                description: this.state.newBook.description
            })
            .then(res => {
                const booksList = [...this.state.books]
                booksList.unshift(res.data)
                this.setState({
                    newBook: {
                        name: '',
                        description: '',
                        img: '',
                        author: '',
                        price: '',
                    },
                    isBookFormDisplayed: false,
                    books: booksList
                })
            })
    }
    showBooks =() =>{
        return this.state.books.map(book => (
            <div>
                <Link to={`/api/v1/books/${book._id}`} >
                    <div className='single'>
                        <h2>{book.name} </h2>
                        <img src={`/img/${book.img}`} alt={book.name} />
                        <h2>{book.author} </h2>
                        <h3>${book.price} </h3>
                    </div>
                </Link>
            </div>
        ))
    }
    render() {
        return (

            <div className="allbooks">
                <h1>Book Catalogue</h1>

                <div className="bookcontainer">
                    {this.showBooks()}
                </div>
                <button className="buttons createbutton" onClick={this.toggleBookForm}>Add New Book</button>
                {this.state.isBookFormDisplayed
                        ? 
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
                                <label htmlFor="img">Image</label>
                                <input
                                    id="image"
                                    type="file"
                                    name="img"
                                    onChange={this.handleChange}
                                    value={this.state.newBook.img}
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
                                <textarea
                                    id="price"
                                    type="text"
                                    name="price"
                                    onChange={this.handleChange}
                                    value={this.state.newBook.price}
                                />
                            </div>
                            <button onClick={this.createBook()}>Create</button>
                        </form >
                        : null
                }
            </div>
        )
    }
}
export default Books