import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate">{movie.title}</h3>
          <p className="text-sm text-gray-400">{movie.release_date.split('-')[0]}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;