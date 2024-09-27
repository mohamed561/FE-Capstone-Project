import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../services/api';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies.slice(0, 5));
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f4f6] text-gray-800 p-4">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <img src="/path/to/your/logo.png" alt="MovieDB Logo" className="w-48 h-auto mb-12" />
        
        <div className="w-full max-w-xl mb-8 relative">
          <SearchBar />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <Link 
          to="/movies" 
          className="mb-12 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold shadow-lg"
        >
          View Full Website
        </Link>
        
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;