const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  entry: '/index.jsx',
  plugins: [new CompressionPlugin()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|pdf|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/public/icons/[name].[ext]'
        }
    }
    ],
  },
  devtool: 'eval-source-map'
};
