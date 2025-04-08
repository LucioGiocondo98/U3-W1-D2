import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = function ({ books }) {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const handleBookSelect = (asin) => {
    setSelectedBookId(asin);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={8}>
          <Row>
            {books.map((book) => (
              <Col key={book.asin} sm={6} md={4} lg={3} className="mb-3">
                <SingleBook
                  book={book}
                  isSelected={book.asin === selectedBookId}
                  onSelect={handleBookSelect}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={6} md={4}>
          {selectedBookId ? (
            <CommentArea bookId={selectedBookId} />
          ) : (
            <h4 className="text-center mt-3">Nessun libro selezionato</h4>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
