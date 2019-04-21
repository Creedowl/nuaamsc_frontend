module.exports = {
  // publicPath: 'http://106.15.177.94:5000/',
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://106.15.177.94:5000/',
        ws: false,
        changeOrigin: true
      }
    }
  }
}
