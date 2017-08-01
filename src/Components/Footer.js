import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = styled.footer`
  padding: 20px;
  color: #f00;
`;

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
