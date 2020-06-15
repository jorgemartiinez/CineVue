<template>
  <div class="card-grid">
    <article class="card" v-for="item of items.results" :key="item.id">
      <div class="card__img-wrapper">
        <img
          class="card__img"
          :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
        />
        <div class="card__rating">
          <span>{{ item.vote_average }}</span>
        </div>
      </div>
      <div class="card__info">
        <h2 class="title-sub">{{ item.title }}</h2>
        <p class="paragraph-sub">{{ item.release_date }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: { items: Object }
};
</script>

<style lang="scss" scoped>
$border-radius: 1.5rem;

.card-grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3rem 2rem;

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

    &__rating {
      position: absolute;
      bottom: -2%;
      left: 2%;
      border-radius: 50%;
      padding: 0.5rem 1.2rem;
      border: 3px solid $color-primary;
      background-color: #000;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
