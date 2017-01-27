const path = require('path');

const outputDir = path.join(__dirname, './public/redux/js');

module.exports = {
  entry: {
    reduxCounter: path.join(__dirname, './src/redux/counter/index.jsx'),
    reduxTodos: path.join(__dirname, './src/redux/todos/index.jsx'),
    reduxFormSimple: path.join(__dirname, './src/redux-form/index.jsx'),
  },
  output: {
    path: outputDir,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
      },
    ],
  },
  devtool: 'source-map',
  externals: [
    {
      window: 'window',
      document: 'document',
    },
  ],
};
