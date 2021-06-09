import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">CoopsList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/saved">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron fluid>
        <Container className="text-center">
          <h1>(React) Google Books Search</h1>
          <p>
            Search for and Save Books of Interest
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Header;