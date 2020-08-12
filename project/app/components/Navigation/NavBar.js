import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="ml-auto">SneakPeek</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Closet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
 
    );
}

export default NavBar;