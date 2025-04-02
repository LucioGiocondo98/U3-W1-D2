import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
/*
const SingleBook = function (props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={props.book.img}
              alt={props.book.title}
            />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
              <Card.Text>{props.book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
);
};
*/

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
      </Col>
    );
  }
}
export default SingleBook;
