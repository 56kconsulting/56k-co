import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import "../App.css";

const Navi = styled.div`
  & {
    background-color: #a1bea5;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    height: 50px;
    a:link {
      color: #d3fedf;
      padding: 5px 5px 15px 5px;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
    }
    a:visited {
      color: #d3fedf;
    }
    a:hover {
      font-size: 18px;
      text-decoration: none;
      padding: 5px 5px 12px 5px;
      text-shadow: 2px 2px #808080;
    }
    a:focus {
      text-decoration: none;
    }
  }
`;

export default class Navigation extends React.Component {
  render() {
    return (
      <Navi>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
      </Navi>
    );
  }
}
