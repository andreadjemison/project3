import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class Footer extends Component {
render(){
    return(
        <div className="footer">


        <Link to="/api/v1/books/" id="navlink">
        Adult BookShelf
        </Link>
        
 
        <h1>Drea's Bookshelf</h1>


        <Link to="/api/v1/kids" id="navlink">
        Kids Section
        </Link>

    </div>
    )
}

}
export default Footer