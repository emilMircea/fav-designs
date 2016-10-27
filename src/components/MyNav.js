import React, { Component } from 'react';
import logo from './../logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MyNav extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.props.loadColorsOnly}>Colors</NavItem>
            <NavItem eventKey={2} href="#">Fonts</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default MyNav;
