import { Card, Button, Row, Col, Container } from "react-bootstrap";
import booksData from "../data/books.json";

const AllTheBooks = function () {
  return (
    <Container>
      <h1>Tutti i Libri</h1>
      <Row className="g-3">
        {booksData.map((book) => (
          <Col key={book.asin} xs={6} md={3} className="mb-4">
            <Card data-testid="book-card">
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
    </Container>
  );
};

export default AllTheBooks;
