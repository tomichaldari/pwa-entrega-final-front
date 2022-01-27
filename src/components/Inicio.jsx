import React from 'react';
import { Carousel } from 'react-bootstrap';

const Inicio = () => {
  return ( 

    
    <Carousel>
      <Carousel.Item>
        <img
          className="center"
          src="/img/maceta-gris-1-car.png"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="center"
          src="/img/mensual-1-car.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="center"
          src="/img/perchero-campera-1.png"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>


  )
}

export default Inicio


