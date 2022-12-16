const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  output: {
    // filename:"dist",
    path: path.join(__dirname, "GBD_Theme/dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src/content/pages/"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
