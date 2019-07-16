module.exports = {
  publicPath: "./",
  outputDir: "html",
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  devServer: {
    disableHostCheck: true
  }
};
