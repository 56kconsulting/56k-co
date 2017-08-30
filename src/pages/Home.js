import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Page from '../Components/Page';
import Tooltip from '../Components/Tooltip.js';

class Home extends Component {
  render() {
    return (
      <Page pageName="Home">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              One part engineering manager, one part public speaker, one part product manager, two parts sys admin.
            </Col>
            <Col xs={12} md={6}>
              One part engineering manager, one part public speaker, one part product manager, two parts sys admin.
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }
}

export default Home;
