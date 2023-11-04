import { Button, ButtonGroup, Card, Container, Form, Row } from 'react-bootstrap'
import Weather from './Weather'
import { useState } from 'react'

const WeatherWrapper = () => {
  const [input, setInput] = useState('')
  const [city, setCity] = useState('')
  const [unit, setUnit] = useState(true)

  const submitCity = (e) => {
    e.preventDefault()
    setCity(input)
    setInput('')
  }

  return (
    <>
      <div className='d-flex vh-100' style={{backgroundImage: 'linear-gradient(cyan, lightGreen)'}}>
        <Container className='d-flex justify-content-center align-items-center'>
          <Card className='w-75 h-75 overflow-auto bg-light'>
            <Card.Header className='w-100'>
                <Form onSubmit={submitCity}>
                  <Row>
                    <Form.Group className='w-75' controlId='formCity'>
                        <Form.Control 
                          type='text' 
                          placeholder='Enter City...'
                          value={input}
                          name='city'
                          onChange={(e) => {
                            setInput(e.target.value)
                          }}>
                        </Form.Control>
                    </Form.Group>
                    <Button className='w-25' type='submit'>Enter</Button>
                  </Row>
                  <Row className='m-1 mt-2'>
                    <ButtonGroup>
                      <Button variant='primary' onClick={() => setUnit(true)} active={unit}>Imperial</Button>
                      <Button onClick={() => setUnit(false)} active={!unit}>Metric</Button>
                    </ButtonGroup>
                  </Row>
                </Form>
            </Card.Header>
            <Weather city={city} unit={unit}/>
          </Card>
        </Container>
      </div>
    </>
  )
}

export default WeatherWrapper