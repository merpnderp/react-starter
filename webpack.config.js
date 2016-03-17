var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {app:'./src/app.js'},
    output: {path: __dirname, filename: './public/build/[name].js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}