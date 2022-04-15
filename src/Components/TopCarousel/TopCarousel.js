import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './TopCarousel.css'

const TopCarousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel className='carousel-parent' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carousel-img d-block"
          src="carousel1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block"
          src="carousel2.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block"
          src="carousel3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default TopCarousel;