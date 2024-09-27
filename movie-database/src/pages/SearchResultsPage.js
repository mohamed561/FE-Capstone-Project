import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { searchMovies } from '../services/api';

function SearchResultsPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleNewSearch = (newQuery) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  return (
    <div className="min-h-screen bg-[#282c34] text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <SearchBar initialQuery={query} onSearch={handleNewSearch} />
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Search Results for "{query}"</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#98FB98]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500 text-white p-4 rounded-lg">{error}</div>
        ) : movies.length === 0 ? (
          <p className="text-center text-xl">No movies found. Try a different search term.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;