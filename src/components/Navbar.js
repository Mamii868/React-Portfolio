import React from "react";
import "./Navbar.css"
import Pdf from "../assets/New Resume.pdf"
import { Navbar, Container, Nav } from "react-bootstrap";
function Navigation() {
  function onResumeClick() {
    window.open(Pdf);
  };
    return (
  <Navbar bg="dark" expand="lg" variant="dark" className="navbar" fixed="top">
  <Container>
    <Navbar.Brand href="#home">Marc Moten</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href="#Contact">Contact Me</Nav.Link>
      <Nav.Link onClick={onResumeClick}>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;