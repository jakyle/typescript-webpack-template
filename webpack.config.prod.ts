import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// md5hashwebpack currently has no  @types definition
// tslint:disable-next-line:no-var-requires
const md5hashwebpack = require('md5-hash-webpack-plugin');
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

/* const ExtractTextPlugin:any = require("extract-text-webpack-plugin");
const extractCSS: any = new ExtractTextPlugin("./dist/css/[name].css"); */

export default {
    devtool: 'source-map',
    watch: true,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index'),
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.scss', '.sass', '.css' ],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /(node_modules)/,
                options: {
                    formatter: 'stylish',
                    failOnHint: false,
                },
            },
            {   test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                options: {
                    useBabel: true,
                },
            },
              {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
              },
              {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                minimize: true,
                            },
                        },
                    ],
                }),
              },
        ],

      },
      plugins: [
        // Minify js
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),

        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin({filename: '[name].[contenthash].css', allChunks: true}),

        // Hash the files using MD5 so that their names change when the content changes.
        new md5hashwebpack(),

        // Use CommonsChunkPlugin to create a seperate bundle
        // of vendor libraries so that they're cached separately.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),
      ],
};
