// ListOfAllMovies.js
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';

const ListOfAllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const moviesData = await fetchMovies(searchTerm);
      setMovies(moviesData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.imdbID} className="border p-4 rounded shadow">
              <h2 className="font-semibold">{movie.Title}</h2>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
            </li>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </ul>
    </div>
  );
};

export default ListOfAllMovies;
