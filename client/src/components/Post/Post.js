import React from 'react';
import { Button, Container, Pagination, Table } from 'react-bootstrap';
import './Post.css';

const Post = ({ onClick }) => {
  return (
    <Container style={{ marginTop: 55 }}>
      <h1 style={{ marginBottom: 15 }}>Post</h1>
      <div style={{ textAlign: 'right' }}>
        <Button style={{ marginBottom: 7 }} variant="dark" onClick={onClick}>
          write
        </Button>
      </div>
      <div className="overflow-auto">
        <Table className="table-Light" bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>title</th>
              <th>nickname</th>
              <th>views</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>가입 인사입니다.</td>
              <td>Kim</td>
              <td>20</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hello</td>
              <td>Lee</td>
              <td>5</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>3</td>
              <td>가입 인사입니다.</td>
              <td>Jack</td>
              <td>10</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>4</td>
              <td>가입 인사입니다.</td>
              <td>Hem</td>
              <td>30</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>5</td>
              <td>가입 인사입니다.</td>
              <td>choi</td>
              <td>100</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>6</td>
              <td>가입 인사입니다.</td>
              <td>James</td>
              <td>6</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>7</td>
              <td>가입 인사입니다.</td>
              <td>Rachel</td>
              <td>77</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>8</td>
              <td>가입 인사입니다.</td>
              <td>Jack</td>
              <td>60</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>9</td>
              <td>가입 인사입니다.</td>
              <td>Bob</td>
              <td>4</td>
              <td>2021-09-02</td>
            </tr>
            <tr>
              <td>10</td>
              <td>가입 인사입니다.</td>
              <td>park</td>
              <td>1</td>
              <td>2021-09-02</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="Post-Pagination">
        <Pagination style={{ marginTop: 2 }}>
          <Pagination.First />
          <Pagination.Ellipsis />

          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Last />
        </Pagination>
      </div>
    </Container>
  );
};

export default Post;
