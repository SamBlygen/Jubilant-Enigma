import Navbar from '../components/Navbar.jsx';
import ShopPage from '../components/ShopPage.jsx';
import RegisterForm from '../components/RegistrationForm.jsx';
import LoginForm from '../components/LoginPage.jsx';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    console.log(`Product added: ${product.name}`);
  };

  return (
    <Router>
      <div id='navbar'>
        <Navbar cartCount={cartCount} /> {/* Ensure you're passing the cartCount prop */}
      </div>

      <Routes>
        <Route path="/" element={<ShopPage addToCart={addToCart} />} /> 
        <Route path="/register" element={<RegisterForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
      </Routes>
    </Router>
  );
(
  <div id="carouselExample" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="image1.jpg" className="d-block w-100" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="image2.jpg" className="d-block w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src="image3.jpg" className="d-block w-100" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default App;
