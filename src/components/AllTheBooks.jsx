// src/components/AllTheBooks.jsx
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import booksData from "../data/books.json";

class AllTheBooks extends Component {
  render() {
    return (
      <div>
        <h1>Tutti i Libri</h1>
        <Row className="g-3">
          {booksData.map((book) => (
            <Col key={book.asin} xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                  <Card.Text>{book.price}$</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default AllTheBooks;
