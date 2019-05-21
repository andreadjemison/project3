import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Book from './components/Book'
import All from './components/Allbooks'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Create from './components/CreateBook'

class App extends Component {
  render() {
    return (
      <Router>  
        <Nav />
          <Switch>
            <Route exact path="/" component={All}/>
            <Route exact path="/new" component={Create}/>
            <Redirect from='/new' push to='/'/>
            <Route path="/:id" component={Book}/>
          </Switch>
          <Footer />
      </Router>
    )
  }
}
export default App
