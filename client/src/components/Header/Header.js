import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"; 
import Container from "react-bootstrap/Container";

function Header() {
  //write code for if/else statement on line 35 here
  return (
    
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Coop'sList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Browse</Nav.Link>
            <Nav.Link href="/saved">Saved</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
        <Container>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {/*if not logged in show "Login/Signup"; else, show "My Profile" */}
      </Container>
      </Navbar>

      <Jumbotron fluid>
        <Container className="text-center">
          <h1>Coop'sList - Buy, Sell, Trade</h1>
          <p>
            Browse local listings, search, or filter
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Header;