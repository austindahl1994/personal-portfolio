/* eslint-disable react/prop-types */
import { useState } from "react"
import { Card, Col } from "react-bootstrap"
import './myDevIcons.css'

function MyDevIcons({ icon }) {
  const [isHovering, setIsHovering] = useState(false);
  const [textSize, setTextSize] = useState(100)
  const [color, setColor] = useState('black')
  const [bg, setBg] = useState('white')

  return (
    <>
      <Col sm={4} md={4} lg={2} className="d-flex justify-content-center mt-2 cardInfo">
        <Card style={{width: '8em', height: '12em'}}>
          <Card.Body 
            style={{
              fontSize:`${textSize}px`,
              color: `${color}`,
              backgroundColor: `${bg}`
            }} 
            className="d-flex justify-content-center align-items-center text-center shadow"
            onMouseEnter={() => {
              setTextSize(25)
              setIsHovering(true)
              setColor('white')
              setBg('black')
            }}
            onMouseLeave={() => {
              setTextSize(100)
              setIsHovering(false)
              setColor('black')
              setBg('white')
            }}
            >
            {isHovering ? icon.text : icon.icon}
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default MyDevIcons

/**
 * const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={isHovered ? "fadeInAnimation" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover over me!
    </div>
  );
 */