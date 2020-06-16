const imgMixin = {
  methods: {
    checkImg(poster) {
      if (poster && poster.length > 0) {
        return `https://image.tmdb.org/t/p/original/${poster}`;
      } else {
        return require('@/assets/no-image.svg');
      }
    }
  }
};

const pathToSingleMovie = {
  methods: {
    goToRoute(id) {
      this.$router.push(`/movies/${id}`);
    }
  }
};

export { imgMixin, pathToSingleMovie };
