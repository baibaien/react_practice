const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: "./js/[name].[chunkhash:16].js",
        // publicPath: './assets'
    },
    resolve: {
        extensions: [ '.js', '.json', '.scss','.less','jsonp'],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});