import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import { Tooltip, HoverTrigger, Contents } from './Components/Tooltip.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header greeting="Home!" />
        <Section sectionName="Home Page">
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <Tooltip>
                  <HoverTrigger>
                    <div className="help-tip">?</div>
                  </HoverTrigger>
                  <Contents>
                    <div>
                      <h1>This is the tooltip!</h1>
                      <p>Tooltip body is a bit longer than title</p>
                    </div>
                  </Contents>
                </Tooltip>
              </Col>
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
