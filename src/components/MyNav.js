import React, { Component } from 'react';
import logo from './../logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MyNav extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='index.html'>
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.props.loadColorsOnly}>Colors</NavItem>
            <NavItem eventKey={2} href="#" onClick={this.props.loadFontsOnly} >Fonts</NavItem>
            <NavItem eventKey={3} href="#" onClick={this.props.loadAnimationsOnly} >Animations</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default MyNav;
