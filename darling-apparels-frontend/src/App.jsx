import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ShopPage from '../components/ShopPage.jsx';
import RegisterForm from '../components/RegistrationForm.jsx';
import LoginForm from '../components/LoginPage.jsx';
import CartPage from '../components/CartPage.jsx';
import Carousel from '../components/Carousel.jsx';
import './App.css';




function App() {
  const [cartItems, setCartItems] = useState([]); // Store cart items

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product._id);

    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(`Product added: ${product.name}`);
  };

  const carouselItems = [
    {
      image: 'https://cdn-img.prettylittlething.com/9/c/9/0/9c90b960f4a726cecf94ff38395ba3064bf640b3_CNJ0903_1.jpg?imwidth=1600',
    },
    {
      image: 'https://cdn-img.prettylittlething.com/f/4/d/9/f4d9260a286a5d49fdd799b799ea83b78e9e6b38_cng5905_1.jpg?imwidth=1600',
    },
    {
      image: 'https://cdn-img.prettylittlething.com/6/9/4/b/694bdccb7f9b71cea0309f343e953c46397b685c_cmq2170_1.jpg?imwidth=1600',
    },
    {
      image: 'https://cdn-img.prettylittlething.com/a/0/d/3/a0d3e066ccd3e9afeddd8ebc2e29526e031988b5_cni4827_1.jpg?imwidth=1000',
    },
  ];

  return (
    <Router>
      <div id='navbar'>
        <Navbar cartCount={cartItems.length} /> 
      </div>
      <div className="carousel-container">
        <Carousel items={carouselItems} /> 
      </div>
      <Routes>
        
        <Route path="/" element={<ShopPage addToCart={addToCart} />} /> 
        <Route path="/register" element={<RegisterForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>

      
    </Router>
  );

}

export default App;
