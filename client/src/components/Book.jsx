
import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: {
            name: this.props.name,
            description: this.props.description,
            // image: this.props.image,
            author: this.props.author,
            price: this.props.price,
        }
    }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    book: {
                        name: res.data.name,
                        description: res.data.description,
                        // image: res.data.image,
                        author: res.data.author,
                        price: res.data.price
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    showBook() {
        return (
            <div className='show' >
            <h2>{this.state.book.name} </h2>
            {/* <img src={`/img/${this.state.book.image}`} alt=" " /> */}
            <h2>{this.state.book.author} </h2>
            <h3>{this.state.book.description} </h3>
            <h4>${this.state.book.price} </h4>
            </div>
        )
}
render() {
    // let books1 = this.props
    return (
        <div className="showcontainer">
            {this.showBook()}


        </div>
    )
}
}
export default Book
