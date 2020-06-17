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
  grid-template-columns: auto auto auto auto;
  grid-gap: 3rem 2rem;
}
</style>
