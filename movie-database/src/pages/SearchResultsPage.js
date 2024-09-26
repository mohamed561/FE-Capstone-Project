import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/api';

function SearchResultsPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(query);
        setMovies(data.Search || []);
      } catch (err) {
        setError('Failed to fetch movies. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {movies.length === 0 ? (
        <p>No movies found. Try a different search term.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;