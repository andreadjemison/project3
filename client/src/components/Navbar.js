import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cart from '../img/shopping.png'
import logo from '../img/logo.png'
import '../App.css'

class Navbar extends Component {
render(){
    return(
        <div className="navbar">
         <Link to="/api/v1/books/" id="navlink">
        <img src={logo} alt="" />
        </Link>
        <Link to="/api/v1/books/" id="navlink">All Books</Link>
        
        <h1>Drea's BookStore</h1>
        <Link to="/api/v1/books/login" id="navlink">Login</Link>
        <Link to="/api/v1/books/cart" id="navlink">
        <img src={cart} alt="" />
        </Link>
    </div>
    )
}

}
export default Navbar