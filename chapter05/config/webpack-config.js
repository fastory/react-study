const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  devtool: "source-map",
  entry: {
    // 文件入口配置
    index: "./src/index",
    vendor: ["react", "react-dom"]
  },
  output: {
    // 文件输出配置
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/, loader: "ts-loader" },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        // use: [
        //   { loader: "babel-loader"}
        // ],
        use:[
          {
            loader: "babel-loader",
            options: {
              presets: ['react', 'es2015'],
              plugins: [
                ["import", { "libaryName": "antd", "style": "css" }]
              ]
            }
          }
        ]
        
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]--[local]-[hash:base64:5]"
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      filename: "index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8033,
    host: "127.0.0.1",
    hot: true,
    watchOptions: {
      poll: true
    }
  }
};