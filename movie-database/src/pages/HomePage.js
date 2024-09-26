import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../services/api';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies.slice(0, 5)); // Display only first 5 movies
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-navy-900 text-white p-4">
      <div className="w-48 h-24 bg-sky-500 flex items-center justify-center text-white text-2xl font-bold mb-8">
        MovieDB Logo
      </div>
      <div className="w-full max-w-2xl mb-8">
        <SearchBar />
      </div>
      <Link 
        to="/explore" 
        className="mb-12 bg-teal-400 text-navy-900 px-6 py-2 rounded-full hover:bg-teal-500 transition-colors"
      >
        View Full Website
      </Link>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Popular Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;