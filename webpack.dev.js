const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const path = require('path');

module.exports =  merge(common, {
    output: {
        filename: './js/app.bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.scss','.less','jsonp'],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
});

