import { Link } from "react-router-dom"
import { Container, Navbar, Nav} from "react-bootstrap"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import './navigationbar.css'
const Navigationbar = () => {
  const currentPath = window.location.pathname;
  if (currentPath.includes('/#/weather') || currentPath.includes('/#/todo')) {
    return null;
  }
  return (
    <>
      <Navbar expand="md" sticky="top" style={{backgroundColor: 'navy', color: 'white'}} data-bs-theme="dark" className="text-center">
        <Container className="justify-content-between">
          <div>
              <Nav.Link as={Link} to="/">
                <Navbar.Brand style={{color: 'white'}}>
                    Austin Dahl
                </Navbar.Brand>
              </Nav.Link>
          </div>
          <div>      
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" variant="underline">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" style={{color: 'white'}}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about" style={{color: 'white'}}>
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/projects" style={{color: 'white'}}>
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/resume" style={{color: 'white'}}>
                    Resume
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact" style={{color: 'white'}}>
                    Contact
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <a href="https://github.com/austindahl1994" 
                  target="_blank" rel="noreferrer"
                  style={{color: 'white', fontSize: '24px'}}>
                    <AiFillGithub />
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <a href="https://www.linkedin.com/in/austin-dahl-b1297516a/" 
                  target="_blank" rel="noreferrer"
                  style={{color: 'white', fontSize: '24px'}}>
                    <AiFillLinkedin />
                  </a>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigationbar