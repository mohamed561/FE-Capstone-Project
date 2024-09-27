import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import MovieCard from '../components/MovieCard';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites here, 
          <Link to="/login" className="text-white-500 underline ml-1">Login </Link> 
          to reach yours.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
