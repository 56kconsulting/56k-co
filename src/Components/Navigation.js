import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

const Navi = () =>
  <div>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/services">Services</NavLink>
  </div>;

export default Navi;
