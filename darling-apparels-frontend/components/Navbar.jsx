import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1 className='nice-animate'>DARLING APPAREL</h1>
      <ul className="nav-items">
        <li>
          <Link to="/">
            <FaHome size={24} />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserPlus size={24} />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt size={24} />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
