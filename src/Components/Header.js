import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

import Navigation from './Navigation';

const Header = styled.header`
  background-color: #ddd;
  padding: 20px;
  & > .container > .row > .col-md-6 {
    height: 100%;
  }
`;

const HeaderContainer = props => {
  return (
    <Header>
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>
              {props.greeting}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Navigation />
          </Col>
        </Row>
      </Grid>
    </Header>
  );
};

HeaderContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default HeaderContainer;
