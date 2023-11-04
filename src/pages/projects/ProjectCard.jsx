/* eslint-disable react/prop-types */
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import './projectCard.css'

const ProjectCard = ({project}) => {
  
  return (
    <>
      <Col className="d-flex m-4 w-75 project">
        <Card className="card w-100" style={{backgroundImage: `url(${project.image})`}}>
          <Card.Body className="d-flex flex-column card-body overflow-auto">
            <Row className="d-flex m-2 text-center project">
              <Card.Title className="card-title ">{project.name}</Card.Title>
            </Row>
            <Row className="d-flex m-2 text-center lh-lg">
              <Card.Text>
                <span>
                  {project.badges.map((badge, index) => {
                    let pillColor;
                    switch(badge) {
                      case 'HTML':
                        pillColor = 'danger'
                        break;
                      case 'CSS':
                        pillColor = 'success'
                        break;
                      case 'React':
                        pillColor = 'info'
                        break;
                      case 'JavaScript':
                        pillColor = 'warning'
                        break;
                      case 'NodeJS':
                        pillColor = 'warning'
                        break;
                      case 'ExpressJS':
                        pillColor = 'warning'
                        break;
                      case 'Unity':
                        pillColor = 'dark'
                        break;
                      default:
                        pillColor = 'primary'
                        break;
                  }
                  return (<Badge pill bg={pillColor} key={index} className="mx-1 card-badges" >{badge}</Badge>)
                  })}
                </span>
              </Card.Text>
            </Row>
            <Row className="d-flex m-2 flex-grow-1">
              <Card.Text className="card-info">
                {project.info}
              </Card.Text>
            </Row>
            <Row className="d-flex m-2">
              <div className="d-flex justify-content-center gap-3 card-text project" >
                  {project.liveLink === '' ? (
                    <Button 
                      className="hiddenbtn"
                      variant="outline-dark" 
                      disabled={project.liveLink === ''}>
                        Live
                      </Button>
                    ) : (
                      <Button 
                        className="hiddenbtn"
                        variant="outline-dark" 
                        href={project.liveLink}
                        target="_blank">
                        Live
                      </Button>
                    )
                  }
                  {project.gitHubLink === '' ? (
                    <Button 
                      className="hiddenbtn"
                      variant="outline-dark" 
                      disabled={project.gitHubLink === ''}>
                        Github
                      </Button>
                    ) : (
                      <Button 
                        className="hiddenbtn"
                        variant="outline-dark" 
                        href={project.gitHubLink}
                        target="_blank">
                        Github
                      </Button>
                    )
                  }
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ProjectCard