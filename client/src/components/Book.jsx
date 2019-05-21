
import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'


class Book extends Component {
    render() {
        return (
<div>
                    <Link to={`/${this.props.book.id}`} >
                    <div className='single'>
                        <h2>{this.props.book.name} </h2>
                        <img src={this.props.book.image} alt={this.props.book.name}/>
                        <h2>{this.props.book.author} </h2>
                        <h3>${this.props.book.price} </h3>
                        </div>
                    </Link>
            </div>
        )
    }
}
export default Book
