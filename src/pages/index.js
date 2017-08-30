import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import NotFound from './NotFound';

export default class Pages extends Component {
  render() {
    return (
      <div >
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/congrats" component={NotFound} />
          </Switch>
        </div>
      <Footer />
      </div>
    );
  }
}
