import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";

import AaronBrongersma from "../assets/AaronBrongersma.jpg";

const Header = styled.header`
  background-image: url(${AaronBrongersma});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  background-color: #ddd;
  height: 200px;
  padding: 20px;
  h1 {
    position: absolute;
    top: 40%;
  }
  & > .container > .row > .col-md-6 {
    height: 100%;
  }
  @media (min-width: 480px) {
    height: 300px;
  }
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export default Header;
