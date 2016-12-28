const path = require('path');
const output_dir = path.join(__dirname, './public/redux/js');

module.exports = {
  entry: {
    reduxCounter: './src/redux/counter/index.js'
  },
  output: {
    path: output_dir,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  devtool: "source-map",
  externals: [
    {
      window: 'window',
      document: 'document',
    }
  ]
};
