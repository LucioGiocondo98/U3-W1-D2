import { Col, Container, ListGroup, Row } from "react-bootstrap";
import SingleComment from "./SingleComment";
const CommentsList = ({ recensioni }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Recensioni</h3>
          <ListGroup>
            {recensioni.length > 0 ? (
              recensioni.map((recensione) => (
                <SingleComment key={recensione._id} recensione={recensione} />
              ))
            ) : (
              <p>Nessun commento disponibile.</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default CommentsList;
