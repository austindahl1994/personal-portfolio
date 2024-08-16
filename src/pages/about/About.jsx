import { Col, Container, Row } from "react-bootstrap";
import {
  cardIconsOne as iconsOne,
  cardIconsTwo as iconsTwo,
} from "./cardIcons";
import MyDevIcons from "./MyDevIcons";

const About = () => {
  return (
    <>
      <div className="d-flex flex-grow-1 bg-light">
        <Container className="d-flex flex-column flex-grow-1">
          <Row className="d-flex mb-0">
            <Col className="d-flex flex-column pe-5">
              <h2
                className="mt-5 px-2"
                style={{ color: "black", fontFamily: "Papyrus" }}
              >
                <q>
                  Choose a job you love, and you will never have to work a day
                  in your life
                </q>
              </h2>
              <h3
                className="text-end m-0"
                style={{ fontFamily: "Lucida Handwriting" }}
              >
                -Confucius
              </h3>
            </Col>
            <Col
              className="d-flex flex-column flex-grow-2 p-2"
              style={{ fontFamily: "Georgia" }}
            >
              <h5 className="text-left lh-base pb-2">
                Hello! My name is Austin Dahl and I love programming, gaming,
                and learning about new technologies. My passions led me to the
                University of Minnesota where I graduated with a Bachelors
                degree in Computer Science.
              </h5>
              <h5 className="lh-base">
                Fast-forward to today and I&#39;ve had the pleasure to intern
                and grow my skills through interests and projects. My main focus
                today is growing my skills and tech stack, which the most recent
                are listed below:
              </h5>
            </Col>
          </Row>
          <Row className="d-flex bg-light flex-grow-1">
            <Row className="d-flex justify-content-evenly align-items-center my-2">
              {iconsOne.map((icon) => (
                <MyDevIcons key={icon.id} icon={icon} />
              ))}
            </Row>
            <Row className="d-flex justify-content-evenly align-items-center my-2">
              {iconsTwo.map((icon) => (
                <MyDevIcons key={icon.id} icon={icon} />
              ))}
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
