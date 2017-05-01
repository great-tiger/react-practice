var path = require('path');
var webpack = require('webpack');
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
module.exports = {
    //一个绝对路径，默认值为 process.cwd()；解析entry时，相对于这个context；
    context: path.resolve(__dirname, "..", "src"),
    //webpack 配置项
    entry: {
        app: [
            bootstrapEntryPoints.dev,
            "./index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "..", "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: 'babel-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!sass-loader' }, {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            }, {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react"
        })
    ]
};
