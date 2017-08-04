import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const navInstance = (
  <Nav activeKey={1}>
    <NavItem eventKey={1} href="/">
      Home
    </NavItem>
    <NavItem eventKey={2} href="/about">
      About
    </NavItem>
    <NavItem eventKey={3} href="/services">
      Services
    </NavItem>
  </Nav>
);

export default navInstance;
