import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Book from './components/Book'
import All from './components/Books'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Create from './components/CreateBook'
import Edit from './components/Edit'

class App extends Component {
  render() {
    return (
      <Router>  
        <Nav />
          <Switch>
            <Route exact path="/" component={All}/>
            <Route exact path="/new" component={Create}/>
            <Route exact path="/edit" component={Edit}/>
            <Route path="/:id" component={Book}/>
          </Switch>
          <Footer />
      </Router>
    )
  }
}
export default App
