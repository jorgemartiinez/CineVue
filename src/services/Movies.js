/* Servicio para hacer llamadas a la api de TheMovieDB */
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = process.env.VUE_APP_TMDB_TOKEN;
const RESOURCE = '/movie';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { Authorization: 'Bearer ' + TOKEN }
});

export default {
  getPopularMovies() {
    return instance.get(`${RESOURCE}/popular`).then(response => response.data);
  },
  getNowPlaying() {
    return instance
      .get(`${RESOURCE}/now_playing`)
      .then(response => response.data);
  }
};
