import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import accordionInstance from './Components/Accordion';
import Jumbotron from './Components/Jumbotron';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron greeting="Welcome!" />
        <Section sectionName="Section One">
          <Grid>
            <Row>
              <Col xs={12} md={6} />
              <Col xs={12} md={6} />
            </Row>
          </Grid>
        </Section>
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
        <Section sectionName="Section Three">
          <Grid>
            <Row>
              <Col xs={3} md={2} mdOffset={2}>
                Twitter
              </Col>
              <Col xs={3} md={2}>
                Facebook
              </Col>
              <Col xs={3} md={2}>
                Medium
              </Col>
              <Col xs={3} md={2}>
                LinkedIn
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
