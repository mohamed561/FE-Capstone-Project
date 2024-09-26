import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="md:flex">
        <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-600 mb-4">{movie.Year} | {movie.Runtime} | {movie.Genre}</p>
          <p className="mb-4">{movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writers:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;