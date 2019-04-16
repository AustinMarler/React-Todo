import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>Hello World</h1>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
