import React, { Component } from 'react'
import Data from '../data/books'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import Book from './Book'

class Allbooks extends Component {
    // state = {
    //       books: []
    //     }
      
    // componentDidMount() {
    //     axios.get('/db/books')
    //         .then(res => {
    //             this.setState({ books: res.data })
    //             console.log(this.state.books);
    //         })
    // }
    render() {
        return (
            <div className="allbooks">
                <h1>All Books</h1>
                <div className="bookcontainer">

                    {Data.map((book, i) => 
                        <Book key={i} book={book} />
                            
                        
                    )}
                    </div>
                    

            </div>
        )
    }
}
export default Allbooks