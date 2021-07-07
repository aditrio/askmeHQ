module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://api.carihadis.com' 
  },
  publicPath: process.env.NODE_ENV === 'production'    ? '/askmeHQ/'    : '/'
}
