import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cart from '../img/shopping.png'
import logo from '../img/logo.png'
import '../App.css'

class Navbar extends Component {
render(){
    return(
        <div className="navbar">
         <Link to="/" id="navlink">
        <img src={logo} alt="" />
        </Link>
        <Link to="/" id="navlink">All Books</Link>
        
        <h1>Drea's BookStore</h1>
        <Link to="/login" id="navlink">Login</Link>
        <Link to="/cart" id="navlink">
        <img src={cart} alt="" />
        </Link>
    </div>
    )
}

}
export default Navbar