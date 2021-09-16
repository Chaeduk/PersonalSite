import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ id, password, onChangeInput, onClick }) => {
  return (
    <div className="Login-content">
      <div style={{ width: 400, margin: 15 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 10 }}>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Id"
              name="id"
              value={id}
              onChange={onChangeInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChangeInput}
            />
          </Form.Group>

          <div className="d-grid gap-2" style={{ marginTop: 27 }}>
            <Button variant="outline-primary" onClick={onClick}>
              LogIn
            </Button>
            <Button
              as={Link}
              to="/signup"
              variant="primary"
              style={{ marginTop: 5 }}
            >
              SignUp
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
