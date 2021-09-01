import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact-content">
      <div style={{ width: 400, margin: 50 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 10 }}>Contact</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contents</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button className="mt-1" onClick={() => alert('제출되었습니다')}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
