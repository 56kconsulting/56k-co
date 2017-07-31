import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import Title from './Title';

export default class Section extends React.Component {
  static propTypes = {
    sectionName: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    return (
      <Grid>
        <Row>
          <Title name={this.props.sectionName} />
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}
