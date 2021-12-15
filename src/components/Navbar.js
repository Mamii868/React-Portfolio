import React from "react";
import "./Navbar.css"
import Pdf from "../assets/Web-Development-Resume.pdf"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
function Navigation() {
    return (
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Marc Moten</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href={Pdf}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default Navigation;