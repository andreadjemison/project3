import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'


class CreateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            image: '',
            author: '',
            price: '',
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    handleChangeImage = (e) => {
        this.setState({ image: e.target.value })
    }
    handleChangeAuthor = (e) => {
        this.setState({ author: e.target.value })
    }
    handleChangePrice = (e) => {
        this.setState({ price: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { name, description, image, author, price } = this.state
        const newBooks = {
            name,
            description,
            image,
            author,
            price,
        }

        axios.post('http://localhost:3000/new', newBooks)
            .then(() =>
                <Link to="http://localhost:3000/" />
            )
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="createnew">
                <h1>Add New Book</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChangeName}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            placeholder="Description"
                            onChange={this.handleChangeDescription}
                            value={this.state.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            onChange={this.handleChangeImage}
                            value={this.state.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input
                            id="author"
                            type="text"
                            name="author"
                            placeholder="Author"
                            onChange={this.handleChangeAuthor}
                            value={this.state.author}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            type="number"
                            name="price"
                            placeholder="Price"
                            onChange={this.handleChangePrice}
                            value={this.state.price}
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
