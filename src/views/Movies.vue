<template>
  <main class="home container">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <!-- <h2 class="title">Las más populares ahora</h2>
      <CardSwiper :items="popular" /> -->
      <h2 class="title">En Cines</h2>
      <CardGrid :items="nowPlaying" />
    </div>
  </main>
</template>

<script>
import CardGrid from '@/components/grid/CardGrid.vue';
import Loading from '@/components/ui/Loading.vue';
import CardSwiper from '@/components/swiper/CardSwiper.vue';
import Movies from '@/services/Movies.js';
export default {
  name: 'Movies',
  data() {
    return {
      loading: true,
      popular: [],
      nowPlaying: []
    };
  },
  components: {
    CardSwiper,
    Loading,
    CardGrid
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      try {
        const data = await Promise.all([
          Movies.getPopularMovies(),
          Movies.getNowPlaying()
        ]);
        this.popular = data[0];
        this.nowPlaying = data[1];
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } catch (err) {
        console.log('error ocurred', err);
      }
    }
  }
};
</script>
