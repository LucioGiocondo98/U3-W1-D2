import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, isSelected, onSelect }) => {
  return (
    <Card
      style={{
        minHeight: "275px",
        border: isSelected ? "5px solid red" : "1px solid gray",
      }}
      onClick={() => onSelect(book.asin)}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price + "$"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
