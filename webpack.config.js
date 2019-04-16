// entry point => output

console.log(__dirname)

module.exports = {
  entry: './src/app.js',
  output: {
    // have to give absolute path for path key
    path: '/Users/kesto/aaJsProjects/prioritize-app',
    filename: 'bundle.js'
  }
}