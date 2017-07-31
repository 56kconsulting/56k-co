import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';

const Title = props => {
  return (
    <Col xs={12}>
      <h2>
        {props.name}
      </h2>
    </Col>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
