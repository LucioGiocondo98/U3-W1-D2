import React from "react";
import { ListGroupItem } from "react-bootstrap";

const SingleComment = ({ recensione }) => {
  return (
    <ListGroupItem>
      {recensione.author}:{recensione.comment}
    </ListGroupItem>
  );
};

export default SingleComment;
