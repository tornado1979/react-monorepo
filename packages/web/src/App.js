import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'


import Home from './pages/home'

class App extends Component{
  state = {data:[]}

  render(){
    return (
      <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    )
  }
}

export default App;
