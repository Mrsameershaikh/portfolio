import React from 'react';
import { Navbar, Nav,Container} from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" id="navTitle">Sameer Ahmed Shaikh</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#AboutMe">AboutMe</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#ContactMe">ContactMe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
