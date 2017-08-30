import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';

import Page from '../Components/Page';

class App extends Component {
  render() {
    return (
        <Page pageName="About">
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
        </Page>
    );
  }
}

export default App;
