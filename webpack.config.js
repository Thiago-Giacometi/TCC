const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },

  mode: 'development',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/html')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },

  watch: true,

  devServer: {
    static: path.join(__dirname, "dist"),
    liveReload: true
  }
    
}