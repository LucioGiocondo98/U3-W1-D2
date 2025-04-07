import React, { Component } from "react";
import CommentsList from "./CommentsList";
import { Col, Container, Row } from "react-bootstrap";

const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2FhNjFkNDM2ZTAwMTVkYTI3MDIiLCJpYXQiOjE3NDM2ODIyMTUsImV4cCI6MTc0NDg5MTgxNX0.AltXgnzUgjxMWadD4fSRbniPbVkTcbbZ6Poug9CuOD4";

class CommentArea extends Component {
  state = {
    recensioni: [],
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.getComments();
    }
  }

  getComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: myToken,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dei commenti");
        }
      })
      .then((data) => {
        this.setState({ recensioni: data });
      })
      .catch((error) => {
        console.log("Errore:", error);
      });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="bg-warning">
            <h2 className="text-center">Area commenti</h2>
            <CommentsList recensioni={this.state.recensioni} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
