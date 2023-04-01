const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve("src/index.tsx"),
    options: path.resolve("src/options/options.tsx"),
    background: path.resolve("src/app/background/background.ts"),
    contentScript: path.resolve("src/app/contentScript/contentScript.ts"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["index", "options"]),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript" && chunk.name !== "background";
      },
    },
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "Clutch Browser Wallet Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
