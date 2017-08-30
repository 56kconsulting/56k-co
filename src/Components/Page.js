import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row } from 'react-bootstrap';
import Title from './Title';

export default class Page extends React.Component {
  static propTypes = {
    sectionName: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    return (
      <Grid>
        <Row>
          <Title name={this.props.pageName} />
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}
