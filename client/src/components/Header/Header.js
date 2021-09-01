import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

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
            {/* <Nav className="mx-lg-3">
              <NavDropdown title="Info" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#info">내정보</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">로그아웃</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            <Nav>
              <Nav.Link as={Link} to="/login" className="mx-lg-3">
                <b>Login</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
