const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "/src/index.js",
    output: { 
        filename: '[fullhash].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html"
      }),
      new CopyPlugin({
        patterns: [
          { from: "assets", to: "assets" },
          { from: "images", to: "images" },
        ],
        options: {
          concurrency: 100,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
      }),
    ],
  };