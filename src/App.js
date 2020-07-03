import React, { Component } from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Main from './components/main';
import {Link,NavLink} from 'react-router-dom';

class App extends Component {
render() {
  return(
    <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to ="/home" href="/home">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/experience" href="/experience">EXPERIENCE</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" href="/projects">PROJECTS</Nav.Link>
            <Nav.Link as={NavLink} to="/education" href="/education">EDUCATION</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" href="/skills">SKILLS</Nav.Link>
            <Nav.Link as={NavLink} to="/Resume" href="/Resume">RESUME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Main />
    </div>
  );
}
}

export default App;
