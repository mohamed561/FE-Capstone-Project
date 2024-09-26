import axios from 'axios';

const API_KEY = 'e9b834';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return response.data;
};