var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/TextHighlighter.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'TextHighlighter.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  externals : ['react', 'prop-types']
};