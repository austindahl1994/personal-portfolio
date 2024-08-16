import { Row, Col, Container } from "react-bootstrap";
import projects from "./devProjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const sortedProjects = projects.sort((a, b) => b.id - a.id);
  const projectChunks = chunkArray(sortedProjects, 4);

  return (
    <Container className="bg-light">
      {projectChunks.map((chunk, chunkIndex) => (
        <Row
          key={chunkIndex}
          className="d-flex flex-grow-1 align-content-center"
        >
          {chunk.map((project) => (
            <Col
              key={project.id}
              xs={12}
              sm={6}
              lg={3}
              className="d-flex justify-content-center my-4"
            >
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Projects;
