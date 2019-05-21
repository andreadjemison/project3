import React, { Component } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import '../App.css'


class CreateBook extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            description: '',
            image: '',
            author: '',
            price: '',
            isBookFormDisplayed: true
        }
    }
    onChangeName(e) {
            this.setState({ name: e.target.value })
        }
    
        onChangeDescription(e) {
            this.setState({ description: e.target.value })
        }
    
        onChangeImage(e) {
            this.setState({ image: e.target.value })
        }
        onChangeAuthor(e) {
            this.setState({ author: e.target.value })
        }
    
        onChangePrice(e) {
            this.setState({ price: e.target.value })
        }
    
        onSubmit(e) {
            e.preventDefault();
            
            console.log(`Form submitted:`);
            console.log(`Name: ${this.state.name}`)
            console.log(`Description: ${this.state.description}`)
            console.log(`Image: ${this.state.image}`)
            console.log(`Author: ${this.state.author}`)
            console.log(`Price: ${this.state.price}`)
            
            this.setState({
                name: '',
                description: '',
                image: '',
                author: '',
                price: '',
                isBookFormDisplayed: false
            })
        }
    
    
    

    // componentDidMount = () => {
    //     axios.get('/').then(res => {
    //         console.log(res.data)
    //         this.setState({ books: res.data })

    //     })
    // }


    // handleChange = (e) => {
    //     const cloneNewBook = { ...this.state.newBook }
    //     cloneNewBook[e.target.name] = e.target.value
    //     this.setState({ newBook: cloneNewBook })
    // }

    // createBook = (e) => {
    //     e.preventDefault()
    //     axios.post('/books', {
    //         name: this.state.newBook.name,
    //         description: this.state.newBook.description,
    //         image: this.state.newBook.image,
    //         author: this.state.newBook.author,
    //         price: this.state.newBook.price,
    //     })
    //         .then(res => {
    //             const BooksList = [...this.state.books]
    //             BooksList.unshift(res.data)
    //             this.setState({
    //                 newBook: {
    //                     name: '',
    //                     description: '',
    //                     image: '',
    //                     author: '',
    //                     price: '',
    //                 },
    //                 isBookFormDisplayed: true,
    //                 books: BooksList
    //             })
    //         })

    // }

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
                            onChange={this.onChangeName}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.onChangeDescription}
                            value={this.state.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            onChange={this.onChangeImage}
                            value={this.state.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input
                            id="author"
                            type="text"
                            name="author"
                            onChange={this.onChangeAuthor}
                            value={this.state.author}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            type="number"
                            name="price"
                            onChange={this.onChangePrice}
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
