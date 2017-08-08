import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

const Navi = () =>
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/">Services</NavLink>
  </div>;

export default Navi;
