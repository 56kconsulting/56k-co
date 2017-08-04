import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = styled.footer`padding: 20px;`;

export default class Container extends React.Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,
  };
  render() {
    const { copyright } = this.props;
    return (
      <div className="page-footer">
        <Footer>
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
            <Row>
              <Col xs={12}>
                <p>
                  {copyright}
                </p>
              </Col>
            </Row>
          </Grid>
        </Footer>
      </div>
    );
  }
}
