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
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer is serving up bundle.js from memory, no need to have a physical bundle.js anymore for development
  // devServer combines live-server's features with webpack's build feature so they both can be done at the same time
  // ** check scripts to see this
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}