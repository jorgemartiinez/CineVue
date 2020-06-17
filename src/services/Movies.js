/* Servicio para hacer llamadas a la api de TheMovieDB */
import axios from 'axios';

const BASE_URL = process.env.VUE_APP_TMDB_URL;
const TOKEN = process.env.VUE_APP_TMDB_TOKEN;
const RESOURCE = '/movie';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { Authorization: 'Bearer ' + TOKEN }
});

export default {
  getPopular() {
    return instance
      .get(`${RESOURCE}/popular?language=es_ES&region=ES`)
      .then(response => response.data['results']);
  },
  getNowPlaying(page) {
    return instance
      .get(`${RESOURCE}/now_playing?page=${page}&language=es_ES&region=ES`)
      .then(response => response.data['results']);
  },
  getById(id) {
    return instance
      .get(`${RESOURCE}/${id}?append_to_response=credits,images&language=es_ES`)
      .then(response => response.data);
  },
  getTopRated() {
    return instance
      .get(`${RESOURCE}/top_rated?language=es_ES`)
      .then(response => response.data['results']);
  }
};
