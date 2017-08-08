import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-bootstrap';

import Navi from './Navigation';

const Header = styled.header.attrs({})`
  background-color:#ddd;
  padding: 20px;
`;

const HeaderContainer = props => {
  return (
    <Header>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <h1>
              {props.greeting}
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <Navi />
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
