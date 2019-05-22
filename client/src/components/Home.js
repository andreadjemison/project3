
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
render(){
    return(
        <div className="Home">
        <h1>Welcome to Drea's BookShelf</h1>
        <Link to="/api/v1/books/">
        <div className='homesecs'>
            The Adult Section
        </div>
        </Link>
        <Link to="/api/v1/kids/">
        <div className='homesecs'>
            For the Kids
        </div>
        </Link>
        </div>
    )
}
}

export default Home