<template>
  <div class="loading">
    <h2 class="title">Cargando...</h2>
    <img src="@/assets/icons/loading.svg" alt="Cargando..." />
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin-bottom: 4rem;
  }
}
</style>
