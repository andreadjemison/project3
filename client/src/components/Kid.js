
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

    showBook= ()=> {
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
        return (
            <div className="showcontainer">
                {this.showBook()}
                <div className="buttons">
                    <button onClick={this.updateBook}>Update</button>
                    <button onClick={this.deletebook}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Book
