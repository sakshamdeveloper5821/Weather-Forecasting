import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './appRedux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Header/>
        <Router>
          <Route exact path="/" component={Dashboard} />
        </Router>
      </Provider>
    );
  }
}

export default App;
