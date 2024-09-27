import axios from 'axios';

const API_KEY = '0c84e8d72cf9033a83b340af591f4cdc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return response.data;
};

export const getPopularMovies = async () => {
  // Since OMDB doesn't have a 'popular movies' endpoint, we'll search for a common term
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=movie&type=movie`);
  return response.data.Search || [];
};

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=batman`); // Example query
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.Search; // Assuming the API returns a 'Search' array
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error; // Re-throw the error to handle it in your component
  }
};