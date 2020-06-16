<template>
  <div class="poster">
    <img
      class="poster__img"
      :src="checkImg(item.poster_path)"
      alt="Poster Img"
    />
    <CardRating :rating="item.vote_average" />
  </div>
</template>

<script>
import CardRating from '@/components/ui/CardRating.vue';
import { imgMixin } from '@/mixins';

export default {
  mixins: [imgMixin],
  components: { CardRating },
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.poster {
  position: relative;
  flex: 0 0 30%;
  margin-right: 5rem;

  &__img {
    width: 100%;
    border-radius: 2rem;
  }
}
</style>
