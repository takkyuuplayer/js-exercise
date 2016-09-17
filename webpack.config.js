module.exports = {
  entry: './webpack.es6',
  output: {
    filename: './public/webpack/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
