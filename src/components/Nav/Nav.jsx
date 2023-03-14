import React from "react";
import logo from "../../logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logo} width={60} /> Apple Unlock
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="blacklist.html">Home</Nav.Link>
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
