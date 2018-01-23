const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, use: [{
                loader: 'babel-loader',
                options: {}
            }]
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {
                test: /\.(png|svg|jpg|gif|jpeg|bmp)$/, use: [{
                loader: 'file-loader',
                options: {outputPath: './assets/image/'}
            }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, use: [{
                loader: 'file-loader',
                options: {outputPath: './assets/font/'}
            }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title: 'practise', template: './index.html'})
    ]
}