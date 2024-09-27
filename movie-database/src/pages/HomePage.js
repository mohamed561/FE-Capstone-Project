import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../services/api';
import logo from '../components/sources/logo.png';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#282c34] text-white p-4">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <img src={logo} alt="The Movie DB Logo" className="w-64 h-auto mb-12" />
        
        <form onSubmit={handleSearch} className="w-full max-w-xl mb-8 relative">
          <input
            type="text"
            placeholder="Search MDB"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 px-4 pr-12 rounded-full bg-[#98FB98] text-[#282c34] placeholder-[#282c34] focus:outline-none"
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#282c34]">
            <Search size={24} />
          </button>
        </form>
        
        <Link 
          to="/movies" 
          className="mb-12 bg-[#E0FFFF] text-[#282c34] px-6 py-2 rounded-full hover:bg-[#B0E0E6] transition-colors text-sm font-semibold"
        >
          View Full Website
        </Link>
        
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">Popular Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-gray-500">
        V0.1/BY: WYATT009
      </div>
    </div>
  );
};

export default HomePage;