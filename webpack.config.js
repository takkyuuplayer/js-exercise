const path = require('path');

const outputDir = path.join(__dirname, './public/redux/js');
const isProduction = process.env.NODE_ENV === 'production';

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
    extensions: ['.js', '.jsx'],
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
      },
    ],
  },
  externals: [
    {
      window: 'window',
      document: 'document',
    },
  ],
};

