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
        axios.put(`/api/v1/books/${this.props.match.params.id}`, {
            name: this.state.book.name,
            description: this.state.book.description,
            img: this.state.book.img,
            author: this.state.book.author,
            price: this.state.book.price
        })
            .then(res => {
                this.setState({ book: res.data, isEditFormDisplayed: false })
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
        console.log(this.state)
        if (this.state.redirectToHome) {
            return (<Redirect to="/api/v1/books/" />)
        }
        return (
            
            <div className="showcontainer">
                {this.showBook()}
                <div className="buttons">
                    
                    <button onClick={this.deleteBook}>Delete</button>
                </div>
                <form onSubmit={ (e)=> this.updateBook(e)} className="color">

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
                    <input className="createbutton" type="submit" value="Update Book" onClick={(e)=> this.updateBook(e)}/>
                </form>
            </div>
        )
    }
}
export default Book
