<template>
  <div>
    <article class="card fadeInSlow" @click="goToRoute(item.id)">
      <div class="card__img-wrapper">
        <img class="card__img" :src="checkImg(item.poster_path)" />
        <CardRating :rating="item.vote_average" />
      </div>
      <div class="card__info">
        <h2 class="title-sub">{{ item.title | cutBySize(20) }}</h2>
        <p class="paragraph-sub">{{ item.release_date }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import CardRating from '@/components/ui/CardRating.vue';
import { cutBySize } from '@/utils/filters.js';
import { imgMixin } from '@/mixins';

export default {
  props: {
    item: Object
  },
  mixins: [imgMixin],
  components: {
    CardRating
  },
  filters: {
    cutBySize
  },
  methods: {
    goToRoute(id) {
      this.$router.push(`/movies/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 1.5rem;

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(rgb(0, 0, 0), 20);
  border-radius: $border-radius;
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &__img-wrapper {
    width: 100%;
    height: 85%;
    position: relative;
  }

  &__img {
    width: inherit;
    height: 100%;
    border-top-right-radius: $border-radius;
    border-top-left-radius: $border-radius;
  }

  &__info {
    height: 15%;
    padding: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
