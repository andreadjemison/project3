import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class Footer extends Component {
render(){
    return(
        <div className="footer">
        <Link to="/" id="footerlink">All Books</Link>
        
        <h1>Drea's BookStore</h1>
        <Link to="/login" id="footerlink">Login</Link>

    </div>
    )
}

}
export default Footer