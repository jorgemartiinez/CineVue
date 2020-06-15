module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";`
      }
    }
  }
};
