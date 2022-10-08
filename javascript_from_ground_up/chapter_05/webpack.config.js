const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = 9000;
module.exports = {
  entry: ['./src/index.js', './src/css/style.css'],
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      logging: 'none',
    },
    compress: true,
    port,
    setupMiddlewares: (middlewares) => {
      setTimeout(() => {
        console.log(`\n\nServer running at: http://localhost:${port}\n\n`);
      }, 1000);

      return middlewares;
    },
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      // filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 1000,
  },
  externals: [
    {
      window: 'window',
    },
  ],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
};
