import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div
        className="d-flex flex-grow-1 bg-light"
        style={{ height: "90dvh", overflow: "auto" }}
      >
        <Container className="bg-light">
          <Row className="justify-content-center h-100">
            <Col className="d-flex justify-content-center align-items-center">
              <Form
                method="POST"
                action="https://getform.io/f/38179390-2d2f-42cd-9fc5-063d8e147b3a"
                className="d-flex flex-column w-75 border rounded p-4"
                style={{ color: "white", backgroundColor: "cornflowerblue" }}
              >
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name: </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        name="name"
                        required
                        autoComplete="name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>E-Mail: </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        autoComplete="email"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formMessage">
                  <Form.Label>What would you like to talk about?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={16}
                    name="message"
                    required
                  />
                </Form.Group>
                <Button className="mt-4" variant="light" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
