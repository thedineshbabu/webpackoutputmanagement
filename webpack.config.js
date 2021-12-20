const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
    },
    another: {
      import: "./src/another-module.js",
    },
    print: {
      import: "./src/print.js",
    },
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
