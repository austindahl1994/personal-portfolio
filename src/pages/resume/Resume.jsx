import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import resume from '../../assets/ADResume.jpg'
import pdf from './Resume.pdf'

const Resume = () => {
  return (
    <>
      <div className='d-flex flex-grow-1'>
        <Container className='bg-light'>
          <Row className='h-100'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
              <a href={pdf} target='blank'>
                <Image src={resume}/>
              </a>
              <Button className='my-3' href={pdf} download={pdf}>
                Download
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Resume