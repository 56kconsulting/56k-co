import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Section from '../Components/Section';
import Tooltip from '../Components/Tooltip.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Section sectionName="Home Page">
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                hi
              </Col>

            </Row>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default Home;
