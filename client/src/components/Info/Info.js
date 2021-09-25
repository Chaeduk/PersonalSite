import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import './Info.css';

const Info = () => {
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
            <tr>
              <td className="title">Hello</td>
              <td className="views">20</td>
              <td className="date">2021-09-25</td>
              <td className="act">
                <Button style={{ margin: 5, width: 70 }} variant="dark">
                  Edit
                </Button>
                <Button style={{ margin: 5, width: 70 }} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Info;
