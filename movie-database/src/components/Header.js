import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="./sources/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Centered Navigation */}
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-8">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/favorites" className="hover:text-gray-300">Favorites</Link></li>
          </ul>
        </nav>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4">
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Signup</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
