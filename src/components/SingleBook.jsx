import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { book } = this.props;
    const { selected } = this.state;
    return (
      <Col>
        <h2>SingleBook</h2>
        <Card
          style={{
            minHeight: "275px",
            border: selected ? "5px solid red" : "1px solid gray",
          }}
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
        >
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price + "$"}</Card.Text>
          </Card.Body>
        </Card>
        {selected && <CommentArea bookId={book.asin} />}
      </Col>
    );
  }
}
export default SingleBook;
