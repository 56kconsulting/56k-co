import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

class Services extends Component {
  render() {
    return (
      <div className="App">
        <Header greeting="Services!" />

        <Section sectionName="Section Three">
          <Grid>
            <Row>
              <Col xs={12} md={4} />
              <Col xs={12} md={8}>
                <p>Things</p>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Footer />
      </div>
    );
  }
}

export default Services;
