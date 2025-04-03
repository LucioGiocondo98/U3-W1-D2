import { Form } from "react-bootstrap";

class AddComments extends Components {
  state = {
    recensione: {
      comment: "",
      rating: 1,
    },
  };
  sendReviw = (e) => {
    e.preventDefault();
    fetch( `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`{
        method:'POST',
        body: JSON.stringify(this.state.recensione),
        headers:{
            'Content-type':''
        }
    })
  };
  render() {
    return (
      <Form onSubmit={this.sendReviw}>
        <Form.Group>
          <Form.Label>Testo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bello sto libro?"
            value={this.state.recensione.comment}
          ></Form.Control>
        </Form.Group>
      </Form>
    );
  }
}
export default AddComments;
