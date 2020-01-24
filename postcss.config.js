module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComents: {
            removeAll: true
          }
        } 
      ]
    })
  ]
}