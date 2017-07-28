import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

const navInstance = (
  <Nav bsStyle="pills" activeKey={1}>
    <NavItem eventKey={1} href="/home">
      NavItem 1 content
    </NavItem>
    <NavItem eventKey={2} href="/home">
      NavItem 2 content
    </NavItem>
    <NavItem eventKey={3} href="/home">
      NavItem 3 content
    </NavItem>
  </Nav>
);

export default navInstance;
