import React, { Component } from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Main from './components/main';


class App extends Component {
render() {
  return(
    <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link href="/experience">EXPERIENCE</Nav.Link>
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/education">EDUCATION</Nav.Link>
          <Nav.Link href="/skills">SKILLS</Nav.Link>
          <Nav.Link href="/Resume">RESUME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Main />
    </div>
  );
}
}

export default App;
