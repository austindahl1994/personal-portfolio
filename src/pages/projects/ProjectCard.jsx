/* eslint-disable react/prop-types */
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import './projectCard.css'

const ProjectCard = ({project}) => {
  
  return (
    <>
      <Col className="d-flex m-4 w-75">
        <Card className="card w-100 card" style={{backgroundImage: `url(${project.image})`}}>
          <Card.Body className="d-flex flex-column card-body overflow-auto">
            <Row className="d-flex m-2 text-center">
              <Card.Title className="card-text" style={{fontSize: '4em', fontFamily : 'Georgia'}}>{project.name}</Card.Title>
            </Row>
            <Row className="d-flex m-2 text-center lh-lg">
              <Card.Text className="card-text">
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
                      case 'RESTful API':
                        pillColor = 'light'
                        break;
                      default:
                        pillColor = 'primary'
                        break;
                  }
                  return (<Badge pill bg={pillColor} key={index} className="mx-1" style={{fontSize: '1em'}}>{badge}</Badge>)
                  })}
                </span>
              </Card.Text>
            </Row>
            <Row className="d-flex m-2 flex-grow-1">
              <Card.Text className="card-text" style={{fontSize: '2.5em'}}>
                {project.info}
              </Card.Text>
            </Row>
            <Row className="d-flex m-2">
              <div className="d-flex justify-content-center gap-3 card-text" >
                  {project.liveLink === '' ? (
                    <Button 
                      variant="outline-dark" 
                      style={{fontSize: '1.5em'}}
                      disabled={project.liveLink === ''}>
                        Live
                      </Button>
                    ) : (
                      <Button 
                        variant="outline-dark" 
                        style={{fontSize: '1.5em'}}
                        href={project.liveLink}
                        target="_blank">
                        Live
                      </Button>
                    )
                  }
                  {project.gitHubLink === '' ? (
                    <Button 
                      variant="outline-dark" 
                      style={{fontSize: '1.5em'}}
                      disabled={project.gitHubLink === ''}>
                        Github
                      </Button>
                    ) : (
                      <Button 
                        variant="outline-dark" 
                        style={{fontSize: '1.5em'}}
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