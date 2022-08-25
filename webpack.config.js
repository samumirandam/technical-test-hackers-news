const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@api": path.resolve(__dirname, "src/api/"),
      "@actions": path.resolve(__dirname, "src/store/actions/"),
      "@reducers": path.resolve(__dirname, "src/store/reducers/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@components": path.resolve(__dirname, "src/views/components/"),
      "@containers": path.resolve(__dirname, "src/views/containers/"),
      "@pages": path.resolve(__dirname, "src/views/pages/"),
      "@ui": path.resolve(__dirname, "src/views/ui/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new Dotenv(),
  ],
  devServer: {
    allowedHosts: path.join(__dirname, "dist"),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  },
};
