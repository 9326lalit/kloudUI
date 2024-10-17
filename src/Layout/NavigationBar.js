import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{fontFamily:"IBM plex sans" , fontSize:"18px" , fontWeight:"400px", position:"relative" , cursor:"pointer"}}>
        <Navbar.Brand href="#">
          {/* Replace with your actual logo */}
          <img
            src="https://www.sprih.com/wp-content/uploads/2024/01/Sprih-Homepage-illustration-updated.png" // Replace with your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Sprih Logo"
          />{' '}
          Sprih
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{gap:"10px"}}> 
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
          <Nav.Link href="#solutions">SOLUTIONS</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#insights">INSIGHTS</Nav.Link>
            <Nav.Link href="#careers">CAREERS</Nav.Link>
            <Nav href="#demo" style={{ alignItems:"center" , padding:"4px 10px 4px 17px" , backgroundColor:"#0F2D32" , borderRadius:"50px ", color:"white"}} >
              BOOK A DEMO   <FontAwesomeIcon icon={faArrowUp} /> 
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;