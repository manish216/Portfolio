import React, { Component, useState, useRef, useEffect } from 'react';
import  './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Main from './pages/main';
import FooterPanel from './components/footer/footer.component';
import {Link,NavLink} from 'react-router-dom';



class App extends Component {
render() {
  return(
    <div>
      <Navbar   variant="dark" fixed="top" className="animate-navbar nav-theme justify-content-between">
      {/* <Navbar.Brand as={NavLink} to="/home" href="/home">Portfolio</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" activeKey="/home" >
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
    <FooterPanel />
    </div>
  );
}
}

export default App;
