// src/components/AllTheBooks.jsx
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import booksData from "../data/books.json";

class AllTheBooks extends Component {
  render() {
    return (
      <div>
        <h1>Tutti i Libri</h1>
        <Row>
          {booksData.map((book) => (
            <Col key={book.asin} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                  <Button variant="primary">Leggi</Button>
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
