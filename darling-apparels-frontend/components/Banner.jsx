import React from 'react';
import './Banner.css'; // Make sure to import the CSS file

const Banner = () => {
  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      <div className="background-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
      </div>
    </div>
  );
};

export default Banner;
