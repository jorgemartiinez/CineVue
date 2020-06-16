<template>
  <div class="back">
    <a class="back__link" @click="$router.go(-1)">⬅ Volver</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.back {
  margin-bottom: 2rem;
  &__link {
    cursor: pointer;
    font-size: 2rem;
  }
}
</style>
