import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/temp-img.jpg';
import '../components/CarousalComponent.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}  controls={false} >
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={image1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={image1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;