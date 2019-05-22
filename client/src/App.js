import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Book from './components/Book.js'
import Books from './components/Books.js'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Kid from './components/Kid.js'
import Kids from './components/Kids.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/api/v1/" component={Home} />
          <Route exact path="/api/v1/books" component={Books} />
          <Route path="/api/v1/books/:id" component={Book} />
          <Route exact path="/api/v1/kids" component={Kids} />
          <Route path="/api/v1/kids/:id" component={Kid} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
