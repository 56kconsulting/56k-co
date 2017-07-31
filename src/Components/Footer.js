import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';

const Footer = props => {
  return (
    <div className="page-footer">
      <Grid>
        <Row>
          <Col xs={12}>
            <p>
              {props.copyright}
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Footer;
