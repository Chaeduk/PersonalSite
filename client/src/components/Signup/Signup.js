import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
  return (
    <div className="Signup-content">
      <div style={{ width: 400, margin: 15 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 10 }}>Signup</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Id</Form.Label>
            <InputGroup>
              <FormControl type="text" placeholder="Id" />
              <Button variant="outline-secondary">Check</Button>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="text" placeholder="Nickname" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button className="mt-1" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
