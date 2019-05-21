import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Allbooks extends Component {
    constructor(props) {
        super(props)
        this.state = {books: []}
    }
    componentDidMount() {
        axios.get('http://localhost:3001/')
            .then(res => {
                this.setState({ books: res.data })
            })
        .catch( (err)=> {
            console.log(err)
        })
    }
    showBooks() {
        return this.state.books.map(book  => (
            <div >
             <Link to={`${book._id}`} >
            <div className='single'>
                <h2>{book.name} </h2>
                <img src={`${book.image}`} alt={book.name} />
                <h2>{book.author} </h2>
                <h3>${book.price} </h3>
            </div>
        </Link>
            </div>
        )
        )
    }

    render() {
        let books2 = this.props
        return (
            
            <div className="allbooks">
                <h1>All Books</h1>
                <Link to="/new">
                    <button>Add New Book</button>
                </Link>
                <div className="bookcontainer">

                    {/* {Data.map((book, i) => 
                        <Book key={i} book={book} />
                    )} */}
                    {this.showBooks(books2)}
                </div>


            </div>
        )
    }
}
export default Allbooks