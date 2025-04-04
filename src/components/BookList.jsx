import SingleBook from "./SingleBook";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const BookList = function ({ books }) {
  return (
    <Container className="mt-5">
      <h2>BookList</h2>
      <Row>
        {books.map((book, i) => (
          <Col key={i} xs={6} md={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BookList;
