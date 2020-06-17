<template>
  <article
    class="card fadeInFast"
    v-if="item.backdrop_path"
    @click="goToRoute(item.id)"
  >
    <img class="card__img" :src="checkImg(item.poster_path)" />
    <CardRating :rating="item.vote_average" />
  </article>
</template>

<script>
import CardRating from '@/components/ui/CardRating.vue';
import { imgMixin, pathToSinglePage } from '@/mixins';

export default {
  mixins: [imgMixin, pathToSinglePage],
  components: { CardRating },
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 1.5rem;
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: $border-radius;

  &__img {
    width: 100%;
    height: 100%;
    border-radius: $border-radius;
    margin-bottom: 1.5rem;
    -webkit-user-drag: none;
  }
}
</style>
