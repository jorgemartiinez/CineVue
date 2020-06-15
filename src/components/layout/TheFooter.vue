<template>
  <footer class="footer">
    <span>Powered by
      <a class="footer__by" href="https://www.themoviedb.org/">The Movie DB</a>
    </span>
    <span class="footer__me">&copy; 2020 - Jorge Martínez</span>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  margin-top: 5rem;
  padding: 1.5rem;
  border-top: $border-white;
  display: flex;
  justify-content: space-between;

  &__me {
    margin-right: 3rem;
  }

  &__by {
    text-decoration: underline;
  }
}
</style>
