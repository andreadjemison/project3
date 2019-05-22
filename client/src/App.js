import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Book from './components/Book.js'
import Books from './components/Books.js'
import Nav from './components/Navbar'
import Footer from './components/Footer'
// import Create from './components/CreateBook'
// import Edit from './components/Edit'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/api/v1/books" component={Books} />
          <Route path="/api/v1/books/:id" component={Book} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
