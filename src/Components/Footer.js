import React from 'react';
import styled from 'styled-components';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMedium from 'react-icons/lib/fa/medium';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import { Grid, Row, Col } from 'react-bootstrap';

const Footer = styled.footer`padding: 20px;`;

export default class Container extends React.Component {
  render() {
    return (
      <div className="page-footer">
        <Footer>
          <Grid>
            <Row>
              <Col xs={2} xsOffset={1}>
                <a
                  href="https://twitter.com/Abrongersma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </Col>
              <Col xs={2}>
                <a
                  href="https://medium.com/@abrongersma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMedium />
                </a>
              </Col>
              <Col xs={2}>
                <a
                  href="https://www.linkedin.com/in/abrongersma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </Col>
              <Col xs={2}>
                <a
                  href="https://twitter.com/Abrongersma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </Col>
              <Col xs={2}>
                <FaEnvelope />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p>&copy; 2017 56 K Consulting, LLC</p>
              </Col>
            </Row>
          </Grid>
        </Footer>
      </div>
    );
  }
}
