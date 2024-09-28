// components/RecentMoviesList.js
import React, { useState, useEffect } from 'react';
import { fetchRecentMovies } from '../services/tmdbApi';
import MovieCard from '../components/MovieCard';

const RecentMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchRecentMovies(page);
        setMovies(prevMovies => [...prevMovies, ...data.results]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recent movies. Please try again.');
        setLoading(false);
      }
    };

    loadMovies();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="min-h-screen bg-[#282c34] text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Recent Movies</h2>
        
        {error && <div className="bg-red-500 text-white p-4 rounded-lg mb-4">{error}</div>}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={{
                imdbID: movie.id,
                Title: movie.title,
                Year: movie.release_date.split('-')[0],
                Poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }}
            />
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center h-24 mt-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#98FB98]"></div>
          </div>
        )}

        {!loading && movies.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="bg-[#98FB98] text-black px-6 py-2 rounded-full hover:bg-[#7CFC00] transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentMoviesList;