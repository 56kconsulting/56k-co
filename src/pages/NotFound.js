import React, { Component } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <Header greeting="Not Found!" />

        <Footer copyright="&copy;2017 56 K Consulting, LLC" />
      </div>
    );
  }
}

export default NotFound;
