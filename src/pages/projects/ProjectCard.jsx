/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Badge, Button, Card, Row } from "react-bootstrap";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card
        className="card w-100"
        style={{
          backgroundImage: `url(${project.image})` || ``,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Card.Body className="d-flex flex-column card-body">
          <Row className="d-flex text-center project">
            <Card.Title className="card-title ">{project.name}</Card.Title>
          </Row>
          <Row className="d-flex text-center lh-lg">
            <Card.Text>
              <span>
                {project.badges.map((badge, index) => {
                  let pillColor;
                  switch (badge) {
                    case "HTML":
                      pillColor = "danger";
                      break;
                    case "CSS":
                      pillColor = "success";
                      break;
                    case "React":
                      pillColor = "info";
                      break;
                    case "JavaScript":
                      pillColor = "warning";
                      break;
                    case "NodeJS":
                      pillColor = "danger";
                      break;
                    case "ExpressJS":
                      pillColor = "success";
                      break;
                    case "Unity":
                      pillColor = "dark";
                      break;
                    default:
                      pillColor = "primary";
                      break;
                  }
                  return (
                    <Badge
                      pill
                      bg={pillColor}
                      key={index}
                      className="mx-1 card-badges"
                    >
                      {badge}
                    </Badge>
                  );
                })}
              </span>
            </Card.Text>
          </Row>
          <Row className="d-flex m-2 flex-grow-1 scroll-hide">
            <Card.Text className="card-info">{project.info}</Card.Text>
          </Row>
          <Row className="d-flex m-2">
            <div className="d-flex justify-content-center gap-1 card-text project">
              {project.liveLink === "" ? (
                <Button
                  className="hiddenbtn"
                  variant="outline-dark"
                  disabled={project.liveLink === ""}
                >
                  Live
                </Button>
              ) : (
                <Button
                  className="hiddenbtn"
                  variant="outline-dark"
                  as={Link}
                  to={project.liveLink}
                  target="_blank"
                >
                  {project.id === 8 ? "Git Front" : "Live"}
                </Button>
              )}
              {/* {project.hasDescription === false ? (
                <Button className="hiddenbtn" variant="outline-dark" disabled>
                  About
                </Button>
              ) : (
                <Button
                  className="hiddenbtn"
                  variant="outline-dark"
                  as={Link}
                  to={project.liveLink}
                  target="_blank"
                >
                  About
                </Button>
              )} */}
              {project.gitHubLink === "" ? (
                <Button
                  className="hiddenbtn"
                  variant="outline-dark"
                  disabled={project.gitHubLink === ""}
                >
                  Github
                </Button>
              ) : (
                <Button
                  className="hiddenbtn"
                  variant="outline-dark"
                  as={Link}
                  to={project.gitHubLink}
                  target="_blank"
                >
                  {project.id === 8 ? "Git Back" : "Github"}
                </Button>
              )}
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectCard;
