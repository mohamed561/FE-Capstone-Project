import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdbApi';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  // Function to handle trailer click
  const handleTrailerClick = () => {
    if (movie && movie.videos && movie.videos.results.length > 0) {
      const trailer = movie.videos.results.find(video => video.type === 'Trailer');
      if (trailer) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
      } else {
        alert("No trailer found for this movie.");
      }
    }
  };

  // Function to handle add to favorites click
  const handleAddToFavorites = () => {
    navigate('../pages/FavoritesPage.js');
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
            <img 
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder-image.jpg'} 
              alt={movie.title} 
              className="w-full md:w-1/3 object-cover" 
            />
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
              <p className="text-[#98FB98] mb-4">
                {movie.release_date.split('-')[0]} | {movie.runtime} min | {movie.genres.map(g => g.name).join(', ')}
              </p>
              <p className="mb-6 text-gray-300">{movie.overview}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><span className="text-[#98FB98]">Director:</span> {movie.credits?.crew.find(c => c.job === 'Director')?.name || 'N/A'}</p>
                <p><span className="text-[#98FB98]">Writers:</span> {movie.credits?.crew.filter(c => c.department === 'Writing').map(w => w.name).join(', ') || 'N/A'}</p>
                <p><span className="text-[#98FB98]">Actors:</span> {movie.credits?.cast.slice(0, 3).map(a => a.name).join(', ') || 'N/A'}</p>
                <p><span className="text-[#98FB98]">Rating:</span> {movie.vote_average.toFixed(1)}/10</p>
              </div>

              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handleTrailerClick}
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  style={{ borderRadius: '12px' }}
                >
                  Get Trailer
                </button>
                <button
                  onClick={handleAddToFavorites}
                  className="bg-white text-black py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors duration-300"
                  style={{ borderRadius: '12px' }}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;