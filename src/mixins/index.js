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

const pathToSinglePage = {
  methods: {
    goToRoute(id) {
      const route = this.$route.path;
      const type = route.slice(1);
      this.$router.push(`/${type}/${id}`);
    }
  }
};

export { imgMixin, pathToSinglePage };
