import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import accordionInstance from './Components/Accordion';
import Jumbotron from './Components/Jumbotron';
import listgroupInstance from './Components/ListGroup';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron greeting="Welcome!" />
        <Grid>
          <p className="App-intro">This is a Website!</p>
        </Grid>
        <Section sectionName="About">
          <Grid>
            <Row>
              <Col xs={12} md={6} />
              <Col xs={12} md={6} />
            </Row>
          </Grid>
        </Section>
        <Section sectionName="Skills and Services">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                {listgroupInstance}
              </Col>
              <Col xs={12} md={8}>
                {accordionInstance}
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section sectionName="Follow">
          <Grid>
            <Row>
              <Col xs={4} md={2} mdOffset={3}>
                Twitter
              </Col>
              <Col xs={4} md={2}>
                Facebook
              </Col>
              <Col xs={4} md={2}>
                Medium
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
