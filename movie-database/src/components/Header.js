import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MovieDB</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;