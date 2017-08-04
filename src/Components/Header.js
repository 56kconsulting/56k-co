import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';

import navInstance from './Navigation';

const Header = props => {
  return (
    <div className="page-title">
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <h1>
              {props.greeting}
            </h1>
          </Col>
          <Col xs={12} md={6}>
            {navInstance}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Header;
