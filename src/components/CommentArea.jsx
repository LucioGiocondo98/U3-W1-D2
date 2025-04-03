import { Component } from "react";
const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2FhNjFkNDM2ZTAwMTVkYTI3MDIiLCJpYXQiOjE3NDM2ODIyMTUsImV4cCI6MTc0NDg5MTgxNX0.AltXgnzUgjxMWadD4fSRbniPbVkTcbbZ6Poug9CuOD4";
class CommentArea extends Component {
  state = {
    recensioni: [],
  };
  componentDidMount() {
    this.getComments();
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
        console.log("dati ricevuti", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel caricamento dati");
        }
      })
      .then((data) => {
        console.log("dati ricevuti?", data);
        this.setState({ recensioni: data });
      })
      .catch((error) => {
        console.log("errore nella ricezione", error);
      });
  };
  render() {
    return (
      <div>
        <h2>CommentArea</h2>
        <ul>
          {this.state.recensioni.length > 0 ? (
            this.state.recensioni.map((recensione) => (
              <li key={recensione._id}>
                <strong>{recensione.author}:</strong> {recensione.comment}
              </li>
            ))
          ) : (
            <p>Nessun commento disponibile.</p>
          )}
        </ul>
      </div>
    );
  }
}
export default CommentArea;
