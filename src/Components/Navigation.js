import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import "../App.css";

const Navi = styled.div`
  & {
    background-color: #e9e8ed;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    height: 50px;
    a:link {
      color: #808080;
      padding: 5px 15px 15px 15px;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
    }
    a:visited {
      color: #808080;
    }
    a:hover {
      font-weight: 700;
      text-decoration: none;
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
