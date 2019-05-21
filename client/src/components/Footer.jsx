import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import cart from '../img/shopping.png'
// import logo from '../img/logo.png'
import '../App.css'

class Footer extends Component {
render(){
    return(
        <div className="footer">
         {/* <Link to="/" id="footerlink">
        <img src={logo} alt="" srcset=""/>
        </Link> */}
        <Link to="/" id="footerlink">All Books</Link>
        
        <h1>Drea's BookStore</h1>
        <Link to="/login" id="footerlink">Login</Link>
        {/* <Link to="/cart" id="footerlink">
        <img src={cart} alt="" srcset=""/>
        </Link> */}
    </div>
    )
}

}
export default Footer