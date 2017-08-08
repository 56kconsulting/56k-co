import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import '../App.css';

const Navi = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    a:link {
      padding: 5px;
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
