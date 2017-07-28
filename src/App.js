import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import accordionInstance from './Components/Accordion';
import navInstance from './Components/Navigation';
import jumbotronInstance from './Components/Jumbotron';
import listgroupInstance from './Components/ListGroup';

const aboutMe = (
  <Row>
    <Col xs={12}>
      <h2>Who I am</h2>
    </Col>
    <Col xs={12} md={6} />
    <Col xs={12} md={6} />
  </Row>
);

const skilledServices = (
  <Row>
    <Col xs={12}>
      <h2>What I do</h2>
    </Col>
    <Col xs={12} md={4}>
      {listgroupInstance}
    </Col>
    <Col xs={12} md={8}>
      {accordionInstance}
    </Col>
  </Row>
);

const followMe = (
  <Row>
    <Col xs={12}>
      <h2>Follow Me</h2>
    </Col>
    <Col xs={4}>Twitter</Col>
    <Col xs={4}>Medium</Col>
    <Col xs={4}>Github</Col>
  </Row>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        {jumbotronInstance}
        <Grid>
          <p className="App-intro">This is Aaron's Website!</p>
          <Button bsStyle="success" bsSize="small">
            Something
          </Button>
          {aboutMe}
          {skilledServices}
          {followMe}
        </Grid>
        <div className="App-footer">
          <Grid>
            <p>&copy;2017 56k Consulting, LLC</p>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
