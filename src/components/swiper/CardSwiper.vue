<template>
  <div class="swiper">
    <vue-card-stack
      :cards="items.results"
      :stack-width="800"
      :card-width="500"
      :card-height="700"
      :max-visible-cards="10"
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
  components: {
    VueCardStack,
    CardSwiperItem
  },
  props: { items: Object },
  mounted() {
    console.log('Props', this.data);
  },
  data() {
    return {};
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
