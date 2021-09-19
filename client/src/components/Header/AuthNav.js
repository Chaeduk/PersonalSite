import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthNav = ({ loginSuccess, user, onClick }) => {
  if (loginSuccess) {
    return (
      <Nav className="mx-lg-3">
        <NavDropdown title={user.nickname} id="collasible-nav-dropdown">
          <NavDropdown.Item href="#info">내정보</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={onClick}>로그아웃</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Nav.Link as={Link} to="/login" className="mx-lg-3">
          <b>Login</b>
        </Nav.Link>
      </Nav>
    );
  }
};

export default AuthNav;
