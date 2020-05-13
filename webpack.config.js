const webpack = require('webpack');
const path = require('path');
const webConfig = {
  devtool: "source-map",
  entry: {
    "bundle": './src/app.ts',
    "client": './src/client.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};

const serverConifg = {
  devtool: "sourcemap",
  entry: {
    "server": './src/server.ts'
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}

module.exports = [webConfig, serverConifg];
