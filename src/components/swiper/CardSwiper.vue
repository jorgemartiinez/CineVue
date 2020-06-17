<template>
  <div class="swiper">
    <vue-card-stack
      :cards="items"
      :stack-width="stackWidth"
      :card-width="cardWidth"
      :card-height="cardHeight"
      :max-visible-cards="visibleCards"
    >
      <template v-slot:card="{ card }">
        <CardSwiperItem :item="card" />
      </template>
    </vue-card-stack>
  </div>
</template>

<script>
import CardSwiperItem from './CardSwiperItem.vue';
import VueCardStack from 'vue-card-stack';
export default {
  props: { items: Array },
  data() {
    return {
      stackWidth: 800,
      cardWidth: 500,
      cardHeight: 700,
      visibleCards: 10
    };
  },
  components: {
    VueCardStack,
    CardSwiperItem
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5rem;
}
</style>
