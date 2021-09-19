import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Write.css';

const Write = ({ title, content, onChangeInput, onSubmit, onClick }) => {
  return (
    <Container style={{ marginTop: 55 }}>
      <h1 style={{ marginBottom: 15 }}>Write</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={onChangeInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={17}
            name="content"
            value={content}
            onChange={onChangeInput}
          />
        </Form.Group>
      </Form>
      <Button style={{ marginRight: 8 }} variant="dark" onClick={onClick}>
        post
      </Button>
      <Button variant="outline-dark">cancel</Button>
    </Container>
  );
};

export default Write;
