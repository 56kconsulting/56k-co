import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Jumbotron from './Components/Jumbotron';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron greeting="Home!" />
        <Section sectionName="Section One">
          <Grid>
            <Row>
              <Col xs={12} md={6} />
              <Col xs={12} md={6} />
            </Row>
          </Grid>
        </Section>
        <Footer copyright="&copy;2017 56 K Consulting, LLC" />
      </div>
    );
  }
}

export default App;
