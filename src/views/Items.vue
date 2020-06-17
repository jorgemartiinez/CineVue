<template>
  <main class="home container">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <h2 class="title">Populares ahora</h2>
      <CardSwiper :items="popular" />
      <h2 class="title" v-if="this.type === 'Movies'">En Cines</h2>
      <h2 class="title" v-else>Lo más visto</h2>
      <CardGrid :items="nowPlaying" :busy="busy" @loadNext="loadNext" />
      <h3 v-if="completed" style="margin-top: 3rem; text-align:center;">
        No hay más resultados para mostrar. &#128552;
      </h3>
    </div>
  </main>
</template>

<script>
import CardGrid from '@/components/grid/CardGrid.vue';
import Loading from '@/components/ui/AppLoading.vue';
import CardSwiper from '@/components/swiper/CardSwiper.vue';
import Movies from '@/services/Movies.js';
import Shows from '@/services/Shows.js';

export default {
  data() {
    return {
      type: '',
      loading: true,
      busy: false,
      page: 1,
      popular: [],
      nowPlaying: [],
      completed: false
    };
  },
  components: {
    CardSwiper,
    Loading,
    CardGrid
  },
  created() {
    this.checkTypeAndCallFetch();
  },
  watch: {
    $route: 'checkTypeAndCallFetch'
  },
  methods: {
    async checkTypeAndCallFetch() {
      this.loading = true;
      const route = this.$route.path;
      this.type = route.charAt(1).toUpperCase() + route.slice(2);
      this.fetch();
    },
    async fetch() {
      try {
        let data = [];
        if (this.type === 'Movies') {
          data = await Promise.all([
            Movies.getPopular(),
            Movies.getNowPlaying(this.page)
          ]);
        } else {
          data = await Promise.all([
            Shows.getPopular(),
            Shows.getNowPlaying(this.page)
          ]);
        }
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
      if (!this.completed) {
        this.busy = true;
        this.page++;
        try {
          let newData = [];
          if (this.type === 'Movies') {
            newData = await Movies.getNowPlaying(this.page);
          } else {
            newData = await Shows.getNowPlaying(this.page);
          }
          if (newData.length > 0) {
            newData.map(item => this.nowPlaying.push(item));
          } else {
            this.completed = true;
          }
          this.busy = false;
        } catch (error) {
          this.busy = false;
        }
      }
    }
  }
};
</script>
