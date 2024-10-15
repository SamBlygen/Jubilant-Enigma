// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Darling Apparel</h1>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to ="/register">Register</Link></li>
        <li><Link to ="/login">Login</Link></li>
      </ul>
    </nav>
  );
};



