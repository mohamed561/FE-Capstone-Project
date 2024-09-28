import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Function to handle the "Get Trailer" button click
  const handleTrailerClick = () => {
    if (movie) {
      const query = `${movie.Title} trailer ${movie.Year}`;
      const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
      window.open(youtubeSearchUrl, '_blank'); // Open YouTube search results in a new tab
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-[#282c34]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#98FB98]"></div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-screen bg-[#282c34]">
      <div className="bg-red-500 text-white p-4 rounded-lg">{error}</div>
    </div>
  );
  
  if (!movie) return (
    <div className="flex justify-center items-center h-screen bg-[#282c34] text-white">
      <div>Movie not found.</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#282c34] text-white p-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-6 text-[#98FB98] hover:underline">&larr; Back to Home</Link>
        <div className="bg-[#1e2128] rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-image.jpg'} alt={movie.Title} className="w-full md:w-1/3 object-cover" />
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
              <p className="text-[#98FB98] mb-4">{movie.Year} | {movie.Runtime} | {movie.Genre}</p>
              <p className="mb-6 text-gray-300">{movie.Plot}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><span className="text-[#98FB98]">Director:</span> {movie.Director}</p>
                <p><span className="text-[#98FB98]">Writers:</span> {movie.Writer}</p>
                <p><span className="text-[#98FB98]">Actors:</span> {movie.Actors}</p>
                <p><span className="text-[#98FB98]">Rating:</span> {movie.imdbRating}/10</p>
              </div>

              {/* "Get Trailer" Button */}
              <button
                onClick={handleTrailerClick}
                className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                style={{ borderRadius: '12px' }} // Rounded corners
              >
                Get Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
