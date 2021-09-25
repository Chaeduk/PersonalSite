import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import './Info.css';
import moment from 'moment';

const Info = ({ myPosts }) => {
  return (
    <Container style={{ marginTop: 55 }}>
      <h1 style={{ marginBottom: 30 }}>My Post</h1>
      <div className="overflow-auto">
        <Table className="table-Light" bordered hover>
          <thead>
            <tr>
              <th className="title">title</th>
              <th className="views">views</th>
              <th className="date">date</th>
              <th className="act">act</th>
            </tr>
          </thead>
          <tbody>
            {myPosts.map((post, index) => (
              <tr key={index}>
                <td className="title">{post.title}</td>
                <td className="views">{post.views}</td>
                <td className="date">
                  {moment(post.createdAt).format('YYYY-MM-DD')}
                </td>
                <td className="act">
                  <Button style={{ margin: 5, width: 70 }} variant="dark">
                    Edit
                  </Button>
                  <Button
                    style={{ margin: 5, width: 70 }}
                    variant="danger"
                    onClick={() => {
                      const a = window.confirm('asdfdsf');
                      console.log(a);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Info;
