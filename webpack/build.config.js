const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIRNAME = __dirname + '/../';

module.exports = {
  resolve: {
    modules: [path.join(DIRNAME, 'src'), 'node_modules']
  },

  entry: [path.resolve(DIRNAME, 'src')],

  output: {
    filename: `assets/js/[name].[hash].bundle.js`,
    chunkFilename: `assets/js/[name].chunk-[hash].js`,
    path: path.resolve(DIRNAME, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(DIRNAME),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: '/assets',
                minimize: true,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]?[hash]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 65
              },
              optipng: {
                optimizationLevel: 7
              },
              gifsicle: {
                interlaced: false
              },
              svgo: {
                plugins: [
                  {
                    cleanupIDs: false
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('build', {
      root: DIRNAME,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(DIRNAME, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/styles.[hash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      warnings: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })
  ]
};
