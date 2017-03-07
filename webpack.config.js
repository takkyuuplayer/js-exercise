const path = require('path');

const outputDir = path.join(__dirname, './public/js');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    reduxCounter: path.join(__dirname, './src/redux/counter/index'),
    reduxTodos: path.join(__dirname, './src/redux/todos/index'),
    reduxFormSimple: path.join(__dirname, './src/redux-form/index'),
    form: path.join(__dirname, './src/form/index'),
    reactComponent: path.join(__dirname, './src/react-components/index'),
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
      {
        test: /\.css?/,
        use: ['style-loader', 'css-loader'],
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

