import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Pages} />
      </Router>
    );
  }
}

export default App;
