/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: {
      main:'./houtai/index.js'
    },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../clientStatic/houtai'),
    chunkFilename:"[hash].[name].js"
  },
  optimization: {
    splitChunks: {
      name:'common',
      minSize:1,
      minChunks:1,
      maxAsyncRequests:10,
      chunks:'async'
    },
  },
  resolve:{
    alias:{
      'houtai':path.resolve(__dirname),
      'img': path.resolve(__dirname,"img")
    }
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:["vue-loader"]
      },
      {
        test:/\.css$/,
        use:["vue-style-loader","css-loader"]
      },
      {
        test:/\.js$/,
        use:["babel-loader?cacheDirectory=true"]
      },
      {
        test:/\.less$/,
        use:["vue-style-loader","css-loader","less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use:[
            {
                loader:"url-loader",
                options:{
                  name:'[path][name].[ext]',
                  limit: 8192
                }
            }
          ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf|ttc)$/,
        loader: 'file-loader'
      }
    ],
  },
  plugins:[
    new webpack.DefinePlugin({
      'env': JSON.stringify("environment"),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './houtai/index.html',
        inject: true
      }),
      // new webpack.DllReferencePlugin({
      //   context: __dirname,
      //   manifest: require("./static/js/vendor-manifest.json"),
      // })
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
}
