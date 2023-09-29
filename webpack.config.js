const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
require('dotenv').config()
module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'), // точка входа, о которой говорилось ранее.
    mode: 'development',
    output: {
        path: path.resolve(__dirname, process.env.OUTPUT_DIR),
        filename: '[name].bundle.js',
        publicPath: process.env.PUBLIC_PATH,

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new webpack.EnvironmentPlugin([
            'BACKEND_HOST',
        ]),
    ], // used for hot reloading when developing
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/, // сопоставляет файлы .js, .ts, и .tsx 
                loader: 'babel-loader', // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: process.env.BACKEND_HOST,
                secure: false,
                changeOrigin: true
            }
        }

    },
}