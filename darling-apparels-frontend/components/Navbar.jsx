import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1 className='nice-animate'>Darling Apparel</h1>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Sale">Sale</Link></li>
        <li>Cart: {cartCount}</li> {/* Display cart count */}
      </ul>
    </nav>
  );
};

export default Navbar;
