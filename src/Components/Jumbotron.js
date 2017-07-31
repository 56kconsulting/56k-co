import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';

const Jumbotron = props => {
  return (
    <div className="page-title">
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>
              {props.greeting}
            </h1>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Jumbotron.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Jumbotron;
