import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Header from './components/Header';
import Navbar_Component from './components/Navbar_Component';
import Carousel_Component from './components/Carrousel_Component';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Navbar_Component/>
        <Carousel_Component/>
        <Container className='mt-14'>
          <h2 className="text-8xl font-extrabold mb-4">
            Tipos de tazas
          </h2>
        </Container>
        <Container fluid className='m-0 p-0'>
          <Row>
            <Col className='bg-[#E5E4DF] h-[300px]'>
              <span>Hol</span>
            </Col>
            <Col className='bg-[#F0E0C8] '>
              <span>Hol</span>
            </Col>
          </Row>
          
        </Container>
        <Container>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
