
import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: '',
            author: '',
            price: '',
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    image: res.data.image,
                    author: res.data.author,
                    price: res.data.price
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    showBook() {
        return (
            <div className='single'>
                <h2>{this.state.name} </h2>
                <img src={`${this.state.image}`} alt=" " />
                <h2>{this.state.author} </h2>
                <h3>${this.state.price} </h3>
            </div>
        )

    }
    render() {
        // let books1 = this.props
        return (
            <div className="bookcontainer">
                {this.showBook()}


            </div>
        )
    }
}
export default Book
