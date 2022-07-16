const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader'],
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
    ],
  };