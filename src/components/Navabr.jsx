// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-white font-semibold text-lg">Rentify</Link>
        </div>
        <ul className="flex items-center">
          <li>
            <Link to="/login" className="text-white hover:text-gray-300 ml-6">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-gray-300 ml-6">Register</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

