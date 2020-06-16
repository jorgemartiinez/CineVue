<template>
  <div class="genres">
    <p class="genre" v-for="(genre, index) of genres" :key="index">
      {{ genre.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    genres: Array
  }
};
</script>

<style lang="scss" scoped>
.genres {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 4rem;
  margin-bottom: 4rem;

  .genre {
    background-color: #fff;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    color: $color-primary;
    font-weight: 600;
  }
}
</style>
