import React from "react";
import "./Navbar.css"
import Pdf from "../assets/New Resume.pdf"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
function Navigation() {
  function onResumeClick() {
    window.open(Pdf);
  };
    return (
      <Navbar bg="dark" variant="dark">
    <Container id="container">
    <Navbar.Brand href="#home">Marc Moten</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href="#Contact">Contact Me</Nav.Link>
      <Nav.Link onClick={onResumeClick}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default Navigation;