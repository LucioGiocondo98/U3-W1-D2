import { Container, Navbar, Nav } from "react-bootstrap";
const MyNav = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema}
      data-bs-theme={props.tema}
    >
      <Container fluid>
        <Navbar.Brand href="#home">My Nav</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
