import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/Books'
import Book from './components/Book'
import Nav from './components/Navbar'

class App extends Component {
  render() {
    return (


      <Router>
        
        <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={Books}/>
            <Route path="/:id" component={Book}/>
          </Switch>
        </div>
      </Router>
 
    )
  }
}
export default App
