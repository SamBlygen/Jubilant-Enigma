// src/components/Carousel.jsx

import React, { useState } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap'; // Assuming you're using react-bootstrap for your carousel

const Carousel = ({ items }) => {
  // State to manage the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler to control the carousel's active index
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <BootstrapCarousel activeIndex={activeIndex} onSelect={handleSelect}>
      {items.map((item, index) => (
        <BootstrapCarousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.alt}
          />
          <BootstrapCarousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;
