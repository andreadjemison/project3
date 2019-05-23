import { Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios'


class Book extends Component {
    state = {
        book: {
            name: '',
            description: '',
            img: '',
            author: '',
            price: ''
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }
    componentDidMount() {
        axios.get(`/api/v1/books/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ book: res.data })
            })
    }
    deleteBook = () => {
        axios.delete(`/api/v1/books/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ redirectToHome: true })
            })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const cloneBook = { ...this.state.Book }
        cloneBook[e.target.name] = e.target.value
        this.setState({ Book: cloneBook })
    }

    updateBook = (e) => {
        e.preventDefault()
        return axios.put(`/api/v1/books/${this.props.match.params.id}`,
         {
            name: this.state.Book.name,
            description: this.state.Book.description,
            img: this.state.Book.img,
            author: this.state.Book.author,
            price: this.state.Book.price
        }
        )
            .then(res => {
                this.setState({ Book: res.data, isEditFormDisplayed: false, redirectToHome: true, })
                console.log({Book: res.data})
            })
    }

    showBook = () => {
        return (
            <div className='show' >
                <h2>{this.state.book.name} </h2>
                <img src={`/img/${this.state.book.img}`} alt=" " />
                <h2>{this.state.book.author} </h2>
                <h3>{this.state.book.description} </h3>
                <h4>${this.state.book.price} </h4>
            </div>
        )
    }

    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to="/api/v1/books/" />)
        }
        return (

            <div className="showcontainer">
                {this.showBook()}

                <div className="buttons">
                <button onClick={this.deleteBook}>Delete</button>
                <button onClick={this.toggleEditForm}>Update</button>
                </div>

                {this.state.isEditFormDisplayed ?
                    <form onSubmit={this.updateBook} className="color">

                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                placeholder={this.state.book.name}
                            />
                        </div>

                        <div>
                            <label htmlFor="name">Image</label>
                            <input
                                type="text"
                                name="img"
                                onChange={this.handleChange}
                                placeholder={this.state.book.img}
                            />
                        </div>

                        <div>
                            <label htmlFor="name">Author</label>
                            <input
                                type="text"
                                name="author"
                                onChange={this.handleChange}
                                placeholder={this.state.book.author}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Description</label>
                            <input
                                type="text"
                                name="description"
                                onChange={this.handleChange}
                                placeholder={this.state.book.description}

                            />
                        </div>

                        <div>
                            <label htmlFor="name">Price</label>
                            <input
                                type="text"
                                name="price"
                                onChange={this.handleChange}
                                placeholder={this.state.book.price}
                            />
                        </div>
                        <input 
                        className="updatebutton"
                        type="submit" 
                        value="Update Book" 
                         />
                    </form>
                    : null}
            </div>
        )
    }
}

export default Book
