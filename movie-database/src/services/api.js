// const API_KEY = 'e9b834';
// const BASE_URL = 'https://www.omdbapi.com/';

import axios from 'axios';

const API_KEY = 'e9b834';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    }
  });
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    }
  });
  return response.data;
};

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    }
  });
  return response.data.results;
};