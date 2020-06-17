<template>
  <main class="tops container">
    <div v-if="loading">
      <AppLoading />
    </div>
    <div v-else>
      <h2 class="title">Películas mejor valoradas</h2>
      <CardGrid :items="movies" :input="'movies'" />
      <h2 class="title">Series mejor valoradas</h2>
      <CardGrid :items="shows" :input="'shows'" />
    </div>
  </main>
</template>

<script>
import AppLoading from '../components/ui/AppLoading.vue';
import CardGrid from '@/components/grid/CardGrid.vue';
import Movies from '@/services/Movies.js';
import Shows from '@/services/Shows.js';

export default {
  components: { AppLoading, CardGrid },
  data() {
    return { loading: true, movies: [], shows: [] };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.movies = await Movies.getTopRated();
      this.shows = await Shows.getTopRated();
      console.log(this.items);
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 8rem;
  margin-bottom: 2rem;
}
</style>
