var path = require('path'),
    libPath = path.join(__dirname, 'lib'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    prototype = require('./webpack/factory.js');

module.exports = {
    entry: path.join(libPath, 'index.js'),
    output: {
        path: wwwPath,
        filename: 'prototype-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /[\/]angular\.js$/,
            loader: 'expose?angular!exports?window.angular'
        }, {
            test: /[\/]lodash\.js$/,
            loader: 'expose?_'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=img/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "ng-annotate?add=true!babel"
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer!sass"
        }, {
            test: [/.*\.svg/, /.*\.eot/, /.*\.ttf/, /.*\.woff/],
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss', '.html'],
        root: [
            libPath,
            path.join(__dirname, 'node_modules')
        ],
        moduleDirectories: [
            'node_modules'
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'Hammer': 'hammerjs/hammer'
        }),
        new prototype.plugin.translation({
            languages: ['en'],
            output: 'locales'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: path.join(libPath, 'index.html')
        })
    ]
};
