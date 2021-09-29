import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Edit = ({
  onSubmit,
  title,
  content,
  onChangeInput,
  onClick,
  onCancel,
}) => {
  return (
    <Container style={{ marginTop: 55 }}>
      <h1 style={{ marginBottom: 15 }}>Edit</h1>
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
        edit
      </Button>
      <Button variant="outline-dark" onClick={onCancel}>
        cancel
      </Button>
    </Container>
  );
};

export default Edit;
