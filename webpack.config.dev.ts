import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
/* const ExtractTextPlugin:any = require("extract-text-webpack-plugin");
const extractCSS: any = new ExtractTextPlugin("./dist/css/[name].css"); */

export default {
    watch: true,
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index'),
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
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
                options: { useBabel: true },
            },
              {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
              },
              {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
              },
        ],
        plugins: [
            // Create HTML file that includes reference to bundled JS.
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: true,
            }),
        ],
      },
};
