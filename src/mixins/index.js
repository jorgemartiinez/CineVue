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
  data() {
    return {
      type: String
    };
  },
  created() {
    const route = this.$route.path;
    this.type = route.slice(1);
  },
  methods: {
    goToRoute(id) {
      this.$router.push(`/${this.type}/${id}`);
    }
  }
};

export { imgMixin, pathToSinglePage };
