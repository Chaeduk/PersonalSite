import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Write.css';

const Write = () => {
  return (
    <Container style={{ marginTop: 55 }}>
      <h1 style={{ marginBottom: 15 }}>Write</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={17} />
        </Form.Group>
      </Form>
      <Button style={{ marginRight: 8 }} variant="dark">
        post
      </Button>
      <Button variant="outline-dark">cancel</Button>
    </Container>
  );
};

export default Write;
