import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import NavLink from './NavLink';

export default () => {
    return (
<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Tim Bell</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
            <li><NavLink to='/Home-About'>Home-About <i className="fa fa-home fa-2x" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to='/Portfolio'>Portfolio <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to='/Contact'>Contact <i className="fa fa-envelope fa-2x" aria-hidden="true"></i></NavLink></li>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}


