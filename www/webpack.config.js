// React Hot Loader
let webpack = require('webpack');
let path = require('path');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './react/main.jsx',
    './stylesheet/reset.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.css$/,
        loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  }
};
