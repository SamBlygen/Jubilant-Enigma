import React from 'react';
import Carousel from '../components/Carousel.jsx';

const CarouselLayout = ({ children, carouselItems }) => {
  return (
    <>
      {children}
      <div className="carousel-container">
        <Carousel items={carouselItems} />
      </div>
    </>
  );
};

export default CarouselLayout;
