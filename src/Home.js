import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import { Tooltip } from './Components/Tooltip.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header greeting="Home!" />
        <Section sectionName="Home Page">
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                hi
              </Col>
              <Col xs={12} md={6}>
                This is some &nbsp;
                <Tooltip triggerText=" Test content ">
                  <div>
                    <h1 style={{ 'font-family': 'serif' }}>HI!</h1>
                    <p>
                      <a href="google.com" target="_blank">
                        Tooltip
                      </a>
                      body is a bit longer than title
                    </p>
                    <img src="http://lorempixel.com/100/100" />
                  </div>
                </Tooltip>
                &nbsp; designed to test a tooltip.
              </Col>
            </Row>
          </Grid>
        </Section>
        <Footer />
      </div>
    );
  }
}

export default Home;
