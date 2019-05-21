import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import redux from 'react-redux'
// import '../../public/img'

class Allbooks extends Component {
    constructor(props) {
        super(props)
        this.state = { books: [] }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/')
            .then(res => {
                this.setState({ books: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    showBooks() {
        return this.state.books.map(book => (
            <div key={book}>
                <Link to={`${book._id}`} >
                    <div className='single'>
                        <h2>{book.name} </h2>
                        {/* <img src={`${book.image}`} alt={book.name} /> */}
                        <h2>{book.author} </h2>
                        <h3>${book.price} </h3>
                    </div>
                </Link>
            </div>
        ))
    }

    render() {
        let books2 = this.props
        return (

            <div className="allbooks">
                <h1>All Books</h1>

                <div className="bookcontainer">
                    {this.showBooks(books2)}
                </div>

                <div className="buttons">

                    <div className="create">
                        <p>Want to recommend a book you don't see here?</p>
                        <Link to="/new">
                        <input className="createbutton" type="button" value="Add New Book" />
                        </Link>
                    </div>

                    <div className="deleteall">
                        <p>Delete All Books and start over</p>
                        <input className="createbutton" type="submit" value="Remove all Books" />
                    </div>
                </div>

            </div>

        )
    }
}
export default Allbooks