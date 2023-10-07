import { Container, Row } from "react-bootstrap"
import projects from "./devProjects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <>
        <div className="d-flex flex-grow-1 bg-light">
          <Container className="d-flex flex-column flex-grow-1">
            <Row className="d-flex flex-column flex-grow-1 align-content-center">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.id}/>
              ))}
            </Row>
          </Container>
        </div>        
    </>
  )
}

export default Projects