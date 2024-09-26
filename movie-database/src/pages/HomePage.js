import React from 'react';
import SearchBar from '../components/SearchBar';

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to MovieDB</h1>
      <div className="max-w-md mx-auto">
        <SearchBar />
      </div>
    </div>
  );
}

export default HomePage;