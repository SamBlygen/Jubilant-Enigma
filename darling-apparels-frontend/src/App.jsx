import Navbar from '../components/Navbar.jsx';
import ShopPage from '../components/ShopPage.jsx';
import RegisterForm from '../components/RegistrationForm.jsx';
import LoginForm from '../components/LoginPage.jsx';
import './App.css';
import React,  {useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
<Router>
<div id='navbar'>
        <Navbar/>
      </div>

      <Routes>
        
        <Route path="/" element={<ShopPage />} /> 
        <Route path="/register" element={<RegisterForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
      </Routes>
    </Router>

  )
}

export default App;
