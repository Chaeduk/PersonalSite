import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Content.css';

const Content = ({ title, nickname, content, onClick }) => {
  return (
    <Container style={{ marginTop: 55, paddingLeft: 50, paddingRight: 50 }}>
      <hr style={{ marginBottom: 10 }}></hr>
      <h3>{title}</h3>
      <hr style={{ marginTop: 0, marginBottom: 10 }}></hr>
      <p style={{ margin: 0 }}>{nickname}</p>
      <hr style={{ marginTop: 10 }}></hr>
      <pre className="overflow-auto">{content}</pre>
      <hr></hr>
      <Button onClick={onClick}>back</Button>
    </Container>
  );
};

export default Content;
