<template>
  <div class="companies">
    <div v-for="(prod, index) of companies" :key="index" class="company">
      <img
        class="company__img"
        :src="checkImg(prod.logo_path)"
        alt=""
        width="20"
      />
      <span class="company__text">{{ prod.name }}</span>
    </div>
  </div>
</template>

<script>
import { imgMixin } from '@/mixins';

export default {
  mixins: [imgMixin],
  props: {
    companies: Array
  }
};
</script>

<style lang="scss" scoped>
.companies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.company {
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
}
.company__img {
  margin-right: 0.5rem;
}
</style>
