import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  // Function to handle the 'Get Trailer' button click
  const handleTrailerClick = () => {
    const query = `${movie.Title} trailer ${movie.Year}`;
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.open(youtubeSearchUrl, '_blank'); // Open in a new tab
  };

  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-image.jpg'} 
          alt={movie.Title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {movie.Title}
          </h2>
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {movie.Year}
          </p>

          {/* "Get Trailer" Button */}
          <button
            onClick={handleTrailerClick}
            className="mt-3 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm"
            style={{ borderRadius: '12px' }} // Rounded corners for the rectangle button
          >
            Get Trailer
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
