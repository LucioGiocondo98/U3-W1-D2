import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selectedBookId: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBookId: asin });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={8}>
            <Row>
              {this.props.books.map((book) => (
                <Col key={book.asin} sm={6} md={4} lg={3} className="mb-3">
                  <SingleBook
                    book={book}
                    isSelected={book.asin === this.state.selectedBookId}
                    onSelect={this.handleBookSelect}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            {this.state.selectedBookId ? (
              <CommentArea bookId={this.state.selectedBookId} />
            ) : (
              <h4 className="text-center mt-3">Nessun libro selezionato</h4>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
