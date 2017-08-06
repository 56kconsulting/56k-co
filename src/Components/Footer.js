import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = styled.footer`padding: 20px;`;

export default class Container extends React.Component {
  render() {
    return (
      <div className="page-footer">
        <Footer>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <p>&copy; 2017 56 K Consulting, LLC</p>
              </Col>
              <Col xs={4} md={2}>
                Twitter
              </Col>
              <Col xs={4} md={2}>
                Medium
              </Col>
              <Col xs={4} md={2}>
                LinkedIn
              </Col>
            </Row>
          </Grid>
        </Footer>
      </div>
    );
  }
}
