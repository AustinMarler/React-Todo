import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/base.css';
import { Provider } from 'react-redux';
import store from '../store';
import ToDoListHome from './ToDoListHome';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Route exact path='/' component={ToDoListHome} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;