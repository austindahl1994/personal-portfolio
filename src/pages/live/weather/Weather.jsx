import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { FaWind, FaTemperatureHigh } from 'react-icons/fa'
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from 'react-icons/fa6'
import { RiWaterPercentFill } from 'react-icons/ri'
import './Weather.css'

// eslint-disable-next-line react/prop-types
const Weather = ({city, unit}) => {
  const [weatherData, setWeatherData] = useState('')
  const [weatherDescription, setWeatherDescription] = useState('')
  const api = 'https://api.openweathermap.org/data/2.5/weather?'
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${api}q=${city}&appid=${apiKey}&units=${unit ? 'imperial' : 'metric'}`)
        const data = await response.json()
        setWeatherData(data)
        setWeatherDescription(data.weather[0].description)
      } catch (err) {
        console.error('Error getting city data: ', err)
        setWeatherData('')
      }
    }

    if (city) {
      getData()
    }
    
  }, [city, unit, apiKey])

  return (
    <>
      {weatherData ? (
        <div className="d-flex flex-column m-3 h-100">
          <Card.Title className='d-flex justify-content-center'>
                  <h1>{city === '' ? 'City' : city}</h1>
                </Card.Title>
                <Row className='d-flex gap-2 gap-lg-0'>
                  <Col sm={12} lg={4}>
                    <Card className="w-card">
                      <Card.Img 
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                      <Card.Body>
                        <h2>{weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</h2>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={12} lg={4}>
                    <Card className="w-card gap-2">
                      <h2>Windspeed:</h2>
                      <FaWind style={{fontSize: '6em', color: 'lightgray'}}/>
                      <h2>{Math.round(weatherData.wind.speed)} {unit ? 'mp/h' : 'km/h'}</h2>
                      <h2>Humidity:</h2>
                      <RiWaterPercentFill style={{fontSize: '4em', color: 'blue'}}/>
                      <h1>{weatherData.main.humidity}%</h1>
                    </Card>
                  </Col>
                  <Col sm={12} lg={4}>
                    <Card className="w-card gap-3">
                      <h2>Temperature:</h2>
                      <h1 className="d-flex gap-2 align-items-center" style={{color: 'black'}}>
                          <FaTemperatureHigh style={{fontSize: '1.2em'}}/>
                          {' '}{Math.round(weatherData.main.temp)} °{unit ? 'F' : 'C'}
                      </h1>
                      <h2>High:</h2>
                      <h1 className="d-flex gap-2 align-items-center" style={{color: 'red'}}>
                        <FaTemperatureArrowUp style={{fontSize: '1.3em'}}/> {Math.round(weatherData.main.temp_max)} °{unit ? 'F' : 'C'}</h1>
                        <h2>Low:</h2>
                      <h1 className="d-flex gap-2 align-items-center" style={{color: 'blue'}}>
                        <FaTemperatureArrowDown style={{fontSize: '1.3em'}} /> {Math.round(weatherData.main.temp_min)} °{unit ? 'F' : 'C'}
                      </h1>
                    </Card>
                  </Col>
                </Row>
        </div>
      ) : (
        <div className="h-100">
          <Container className="d-flex justify-content-center align-items-center h-100">
            <h1>Please Enter a City</h1>
          </Container>
        </div>
      )}
    </>
  )
}

export default Weather