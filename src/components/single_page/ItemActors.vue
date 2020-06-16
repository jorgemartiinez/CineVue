<template>
  <div class="spacing">
    <h2 class="title">Reparto</h2>
    <div class="cast">
      <div class="cast__card" v-for="(actor, index) of cast" :key="index">
        <img class="cast__img" :src="checkImg(actor.profile_path)" alt="" />
        <h2 class="title-sub">{{ actor.name | cutBySize(15) }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { imgMixin } from '@/mixins';
import { cutBySize } from '@/utils/filters.js';

export default {
  mixins: [imgMixin],
  props: {
    cast: Array
  },
  filters: {
    cutBySize
  }
};
</script>

<style lang="scss" scoped>
.spacing {
  margin-top: 5rem;
}

.cast {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  height: 50rem;
  padding-bottom: 4rem;

  &__card {
    flex: 0 0 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #fff;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(rgb(0, 0, 0), 20);
    border-radius: 1rem;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  &__img {
    width: 100%;
    flex-shrink: 0;
    height: 80%;
    margin-bottom: 2rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .title-sub {
    margin-top: 0rem !important;
    color: #000 !important;
  }
}
</style>
