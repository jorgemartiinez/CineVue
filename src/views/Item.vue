<template>
  <div class="movie container">
    <AppBackButton />
    <div v-if="loading">
      <AppLoading />
    </div>
    <div class="movie__info-container fadeIn" v-else>
      <ItemPoster :item="item" />
      <div class="movie__text-wrapper">
        <ItemInfo :item="item" />
      </div>
    </div>
    <ItemActors :cast="item.credits.cast" v-if="item.credits" />
  </div>
</template>

<script>
import ItemInfo from '../components/single_page/ItemInfo.vue';
import ItemPoster from '@/components/single_page/ItemPoster.vue';
import ItemActors from '@/components/single_page/ItemActors.vue';
import AppBackButton from '../components/ui/AppBackButton.vue';
import AppLoading from '@/components/ui/AppLoading.vue';
import Movies from '@/services/Movies.js';
import Shows from '@/services/Shows.js';

export default {
  components: {
    AppLoading,
    AppBackButton,
    ItemActors,
    ItemPoster,
    ItemInfo
  },
  data() {
    return {
      id: 0,
      item: {},
      type: String,
      loading: true
    };
  },
  created() {
    this.id = this.$route.params.id;
    const route = this.$route.path;
    this.type = route.split('/')[1];
    this.fetch();
  },
  methods: {
    async fetch() {
      try {
        if (this.type == 'movies') {
          this.item = await Movies.getById(this.id);
        } else {
          this.item = await Shows.getById(this.id);
        }
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } catch (err) {
        console.log('err ocurred getting single by id', err);
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss">
.movie {
  &__bg {
    width: 70%;
  }

  &__info-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__text-wrapper {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .title-sub {
    margin-top: 4rem;
    color: #fff;
  }
}
</style>
