import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon, Grid, Row, Col } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import accordionInstance from './Components/Accordion';
import navInstance from './Components/Navigation';
import jumbotronInstance from './Components/Jumbotron';
import listgroupInstance from './Components/ListGroup';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {jumbotronInstance}
        <Grid>
          <p className="App-intro">This is a Website!</p>
        </Grid>
        <Section sectionName="About">
          <Row>
            <Col xs={12} md={6} />
            <Col xs={12} md={6} />
          </Row>
        </Section>
        <Section sectionName="Skills and Services">
          <Row>
            <Col xs={12} md={4}>
              {listgroupInstance}
            </Col>
            <Col xs={12} md={8}>
              {accordionInstance}
            </Col>
          </Row>
        </Section>
        <Section sectionName="Follow">
          <Row>
            <Col xs={12} md={4}>
              {listgroupInstance}
            </Col>
            <Col xs={12} md={4}>
              {listgroupInstance}
            </Col>
            <Col xs={12} md={4}>
              {listgroupInstance}
            </Col>
          </Row>
        </Section>

        <Footer copyright="&copy;2017 56 K Consulting, LLC" />
      </div>
    );
  }
}

export default App;
