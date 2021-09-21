import React from 'react';
import { Button, Container, Pagination, Table } from 'react-bootstrap';
import './Post.css';

const Post = ({
  onClick,
  currentPosts,
  pageNumbers,
  paginate,
  currentPage,
  currentPaging,
  maxPagelength,
  nextPaging,
  beforePaging,
  firstPaging,
  lastPaging,
}) => {
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
              <th>title</th>
              <th>nickname</th>
              <th>views</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post, index) => (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.nickname}</td>
                <td>{post.views}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="Post-Pagination">
        <Pagination style={{ marginTop: 2 }}>
          <Pagination.First
            disabled={currentPage === 1 ? true : false}
            onClick={firstPaging}
          />
          <Pagination.Ellipsis
            disabled={currentPaging === 1 ? true : false}
            onClick={() => {
              beforePaging();
            }}
          />
          {pageNumbers[currentPaging - 1].map((page, index) => (
            <Pagination.Item
              key={index}
              onClick={() => paginate(page)}
              active={currentPage === page ? true : false}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Ellipsis
            disabled={currentPaging === pageNumbers.length ? true : false}
            onClick={() => {
              nextPaging();
            }}
          />
          <Pagination.Last
            disabled={currentPage === maxPagelength ? true : false}
            onClick={lastPaging}
          />
        </Pagination>
      </div>
    </Container>
  );
};

export default Post;
