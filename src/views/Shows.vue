<template>
  <main class="home container">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <h2 class="title">Las más populares ahora</h2>
      <CardSwiper :items="popular" />
    </div>
  </main>
</template>

<script>
import CardGrid from '@/components/grid/CardGrid.vue';
import Loading from '@/components/ui/AppLoading.vue';
import CardSwiper from '@/components/swiper/CardSwiper.vue';
import Shows from '@/services/Shows.js';

export default {
  data() {
    return {
      loading: true,
      busy: false,
      page: 1,
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
        const data = await Promise.all([Shows.getPopularShows()]);
        this.popular = data[0];
        this.nowPlaying = data[1];
        setTimeout(() => {
          this.loading = false;
        }, 800);
      } catch (err) {
        console.log('error ocurred', err);
        this.loading = false;
      }
    },

    async loadNext() {
      this.busy = true;
      if (this.page < 25) {
        this.page++;
        console.log('load next data, page', this.page);
        try {
          const newData = await Shows.getNowPlaying(this.page);
          if (newData.length > 0) {
            newData.map(movie => this.nowPlaying.push(movie));
            this.busy = false;
          } else {
            this.busy = true;
          }
        } catch (error) {
          this.busy = true;
        }
      }
    }
  }
};
</script>
