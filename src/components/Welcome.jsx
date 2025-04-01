import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <div className="d-flex justify-content-center w-100">
      <Alert variant="warning" className="text-center">
        Welcome
        <p>Buy whatever u want</p>
      </Alert>
    </div>
  );
};

export default Welcome;
