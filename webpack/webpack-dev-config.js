var path = require('path');
var webpack=require('webpack');
module.exports = {
    //一个绝对路径，默认值为 process.cwd()；解析entry时，相对于这个context；
    context: path.resolve(__dirname, "..", "src"),
    //webpack 配置项
    entry: {
        app: ["./index.js"]
    },
    output: {
        path: path.resolve(__dirname, "..", "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: 'babel-loader' },
            { test: /\.scss$/, loader:'style-loader!css-loader!sass-loader'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react"
        })
    ]
};
