import React from 'react';
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
  greeting: React.PropTypes.string.isRequired,
};

export default Jumbotron;
