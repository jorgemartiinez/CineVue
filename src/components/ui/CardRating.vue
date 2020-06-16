<template>
  <div class="rating">
    <span>{{ rating | formatOneDecimal }}</span>
  </div>
</template>

<script>
import { formatOneDecimal } from '@/utils/filters.js';
export default {
  props: {
    rating: Number
  },
  filters: {
    formatOneDecimal
  }
};
</script>

<style lang="scss" scoped>
.rating {
  position: absolute;
  bottom: 1%;
  left: 2%;
  border-radius: 50%;
  padding: 1rem 1.3rem;
  border: 3px solid $color-primary;
  background-color: #000;
  user-select: none;
}
</style>
