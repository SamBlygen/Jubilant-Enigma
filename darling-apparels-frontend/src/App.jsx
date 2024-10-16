import Navbar from '../components/Navbar.jsx';
import ShopPage from '../components/ShopPage.jsx';
import RegisterForm from '../components/RegistrationForm.jsx';
import LoginForm from '../components/LoginPage.jsx';
import CartPage from '../components/CartPage.jsx';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



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

  return (
    <Router>
      <div id='navbar'>
        <Navbar cartCount={cartItems.length} /> {/* Ensure you're passing the cartCount prop */}
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
