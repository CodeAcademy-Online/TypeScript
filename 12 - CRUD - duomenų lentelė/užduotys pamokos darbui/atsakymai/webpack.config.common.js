const path = require('path');

module.exports = {
  entry: "./src/main.ts",
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "ts-loader",
      },
    ],
  },
}