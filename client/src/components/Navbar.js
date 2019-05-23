import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import '../App.css'

class Navbar extends Component {
render(){
    return(
        <div className="navbar">

         <Link to="/api/v1/" id="navlink">
        <img src={logo} alt="" />
        </Link>

        <Link to="/api/v1/books/" id="navlink">
        Adult BookShelf
        </Link>
        
        <Link to="api/v1" id="home">
        <h1>Drea's Bookshelf</h1>
        </Link>

        <Link to="/api/v1/kids" id="navlink">
        Kids Section
        </Link>
    </div>
    )
}

}
export default Navbar