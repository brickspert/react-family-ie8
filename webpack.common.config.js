const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');

const commonConfig = {
  entry: {
    app: [
      'es5-shim', 'es5-shim/es5-sham',
      'babel-polyfill',
      path.join(__dirname, 'src/index.js'),
    ],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['export-from-ie8/loader'],
      },
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
    }),
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'runtime'
    // }),
    new Es3ifyPlugin(),
  ],

  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers'),
    },
  },
};

module.exports = commonConfig;
