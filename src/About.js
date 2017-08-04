import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Jumbotron from './Components/Jumbotron';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron greeting="About!" />

        <Section sectionName="Section Two">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <ListGroup>
                  <ListGroupItem>Item One</ListGroupItem>
                </ListGroup>
              </Col>
              <Col xs={12} md={8}>
                <p>Things</p>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Footer copyright="&copy;2017 56 K Consulting, LLC" />
      </div>
    );
  }
}

export default App;
