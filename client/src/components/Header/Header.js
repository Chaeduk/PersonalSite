import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import AuthNavContainer from '../../containers/AuthNavContainer';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">Chaeduk</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/profile" className="mx-lg-3">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/post" className="mx-lg-3">
                Post
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-lg-3">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/study" className="mx-lg-3">
                Study
              </Nav.Link>
            </Nav>
            <AuthNavContainer />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
