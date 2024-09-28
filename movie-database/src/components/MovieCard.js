import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieCard({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    // Fetch the trailer using YouTube API or another video platform
    const fetchTrailer = async () => {
      const apiKey = 'AIzaSyB7Y8ImDXNy_SowmLhmDTMlytuI0Rk_Ykg'; // Replace with your YouTube API key
      const query = `${movie.Title} trailer ${movie.Year}`;
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              part: 'snippet',
              q: query,
              key: apiKey,
              maxResults: 1,
              type: 'video'
            }
          }
        );
        const trailerId = response.data.items[0]?.id?.videoId;
        if (trailerId) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailerId}`);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
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
          {trailerUrl && (
            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline"
            >
              Watch Trailer
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
