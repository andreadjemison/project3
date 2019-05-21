import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Book from './components/Book'
import All from './components/Allbooks'
import Nav from './components/Navbar'
import Create from './components/CreateBook'

class App extends Component {
  render() {
    return (


      <Router>
        
        <div>
        <Nav />
        {/* <All /> */}
          <Switch>
            <Route exact path="/" component={All}/>
            <Route exact path="/new" component={Create}/>
            <Route path="/:id" component={Book}/>
          </Switch>
        </div>
      </Router>
 
    )
  }
}
export default App
