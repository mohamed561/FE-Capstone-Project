import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieCard({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [error, setError] = useState(null); // Add error state for debugging

  useEffect(() => {
    const fetchTrailer = async () => {
      const apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API key
      const query = `${movie.Title} trailer ${movie.Year}`;

      console.log('Fetching trailer for:', query); // Debugging log

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              part: 'snippet',
              q: query,
              key: apiKey,
              maxResults: 1,
              type: 'video',
            }
          }
        );

        console.log('YouTube API response:', response); // Debugging log

        const trailerId = response.data.items[0]?.id?.videoId;
        if (trailerId) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailerId}`);
          console.log('Trailer URL:', `https://www.youtube.com/watch?v=${trailerId}`); // Debugging log
        } else {
          setError('No trailer found');
          console.log('No trailer found for:', query); // Debugging log
        }
      } catch (error) {
        setError('Failed to fetch trailer');
        console.error('Error fetching trailer:', error); // Error log
      }
    };

    fetchTrailer();
  }, [movie.Title, movie.Year]);

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
          {/* Trailer Button */}
          {trailerUrl ? (
            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline"
            >
              Watch Trailer
            </a>
          ) : (
            error && <p className="text-red-500 mt-2">{error}</p> // Display error message if trailer not found
          )}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
