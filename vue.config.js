module.exports = {
  productionSourceMap: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8863,
    https: false,
    hotOnly: false,
    proxy: null
  }
};