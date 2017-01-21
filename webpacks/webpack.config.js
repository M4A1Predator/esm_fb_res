var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : [
                './src/main.js'
            ],
    output : {
        path : path.join(__dirname, '../static/app'),
        publicPath : '/assets/',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.js?$/,
                exclude : ['/node_modules', '/static'],
                loader: ['babel'],
                query : {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]
}