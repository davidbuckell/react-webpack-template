const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production',
    module: {
      rules: [        
        {
          test: /.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },    
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          parallel: true,
        }),
      ],
    },
    output: {
      publicPath: '/',
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: "routes.json", to: "." }
        ],
        options: {
          concurrency: 100,
        },
      }),
    ],
  });