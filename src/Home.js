import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header greeting="Home!" />
        <Section sectionName="Home Page">
          <Grid>
            <Row>
              <Col xs={12} md={6} />
              <Col xs={12} md={6} />
            </Row>
          </Grid>
        </Section>
        <Footer />
      </div>
    );
  }
}

export default Home;
