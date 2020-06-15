<template>
  <article class="card" v-if="item.backdrop_path">
    <img
      class="card__img"
      :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
    />
    <div class="card__rating">
      <span>{{ item.vote_average }}%</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: Object
  },
  mounted() {
    console.log('card item', this.item);
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
  }

  &__rating {
    position: absolute;
    bottom: 2%;
    right: 2%;
    background-color: $color-primary;
    padding: 1.5rem 1.5rem;
    border-radius: 50%;
    font-size: 1.5rem;
  }
}
</style>
