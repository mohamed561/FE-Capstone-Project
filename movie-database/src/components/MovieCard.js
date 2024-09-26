import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;