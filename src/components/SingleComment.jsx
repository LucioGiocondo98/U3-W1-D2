import React from "react";

const SingleComment = ({ recensione }) => {
  return (
    <li>
      {recensione.author}:{recensione.comment}
    </li>
  );
};

export default SingleComment;
