const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
  },
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
  publicPath: "/",
};
