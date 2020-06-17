module.exports = {
  lintOnSave: false,
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";`
      }
    }
  }
};
