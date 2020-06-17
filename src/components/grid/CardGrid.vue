<template>
  <div>
    <div class="card-grid">
      <CardGridItem
        :item="item"
        v-for="item of items"
        :key="item.id"
        :input="input"
      />
    </div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <img src="@/assets/icons/loading.svg" v-if="busy" />
    </div>
  </div>
</template>

<script>
import CardGridItem from '@/components/grid/CardGridItem.vue';
export default {
  components: { CardGridItem },
  props: { items: Array, busy: Boolean, input: String },
  methods: {
    loadMore() {
      this.$emit('loadNext');
    }
  }
};
</script>

<style lang="scss" scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem 2rem;

  @include respond(tab-land) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include respond(tab-port) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond(phone) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
}
</style>
