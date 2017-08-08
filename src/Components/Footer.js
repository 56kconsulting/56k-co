import React from 'react';
import styled from 'styled-components';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMedium from 'react-icons/lib/fa/medium';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import { Grid, Row, Col } from 'react-bootstrap';

const Footer = styled.footer`
  text-align: center;
  & > .social {
      font-size: 18px;
      padding-bottom: 20px;
    }
  & > .copyright {
      font-size: 14px;
      background-color: #ddd;

      & > .container > .row > .col-xs-12 > p {
        padding-top: 10px;
      }
    }
  }
`;

export default class FooterContainer extends React.Component {
  render() {
    return (
      <Footer>
        <Grid className="social">
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
              <a href="mailto:aaron@56k.co" target="_top">
                <FaEnvelope />
              </a>
            </Col>
          </Row>
        </Grid>
        <div className="copyright">
          <Grid>
            <Row>
              <Col xs={12}>
                <p>&copy; 2017 56 K Consulting, LLC</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </Footer>
    );
  }
}
