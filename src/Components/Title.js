import React from 'react';
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
  name: React.PropTypes.string.isRequired,
};

export default Title;
