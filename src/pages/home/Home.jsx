import { Col, Container, Row } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <div className="d-flex flex-grow-1" style={{ height: "90vh" }}>
      <Container>
        <Row className="d-flex h-100 main-row">
          {/* <Col className="flex-grow-1"></Col> */}
          <Col className="d-flex flex-column flex-grow-1 main-col">
            <div>
              <h5>Hi, my name is </h5>
              <h1 className="fancy">Austin Dahl</h1>
            </div>
            <div className="pt-2">
              <h4 className="pb-3">
                A Minnesota-based Software Developer who loves to solve
                problems.
              </h4>
              <h4>
                {" "}
                I&#39;m currectly looking for a company to dedicate my time,
                energy, and growth to.
              </h4>
            </div>
          </Col>
          {/* <Col className="flex-grow-1 m-0 p-0"></Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
