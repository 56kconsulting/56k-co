import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Page from "../Components/Page";

class Services extends Component {
  render() {
    return (
      <Page pageName="Services">
        <Col xs={12} md={4} />
        <Col xs={12} md={8}>
          <p>Things</p>
        </Col>
      </Page>
    );
  }
}

export default Services;
