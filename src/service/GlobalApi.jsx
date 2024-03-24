import axios from "axios";

const API_THEMOVIEDB = "https://api.themoviedb.org/3";
const API_KEY = "95c734bbb5718e04e563aa1e0ec1d866";
const API_MOVIE_BY_GENRE = `${API_THEMOVIEDB}/discover/movie?api_key=${API_KEY}`;

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const getTrendingVideos = axios.get(
  `${API_THEMOVIEDB}/trending/all/day?api_key=${API_KEY}`
);

export const getMovieByGenreId = (id) =>
  axios.get(`${API_MOVIE_BY_GENRE}&with_genres=${id}`);

export const searchMoviebyKeyword = (keyword) =>
  axios.get(
    `${API_THEMOVIEDB}/search/movie?query=${keyword}&api_key=${API_KEY}`
  );
