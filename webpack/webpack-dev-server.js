var webpackDevServer=require('webpack-dev-server');
var webpack=require('webpack');
var webpackConfig=require('./webpack-dev-config');
var compiler=webpack(webpackConfig);
var server=new webpackDevServer(compiler,{
	//webpack-dev-server 配置项
});