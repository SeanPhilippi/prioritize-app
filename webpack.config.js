const path = require('path');

// console.log(__dirname)
// console.log(path.join(__dirname, 'public'))

module.exports = {
  entry: './src/app.js',
  output: {
    // have to give absolute path for path key
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
}