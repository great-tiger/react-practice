var webpackDevServer=require('webpack-dev-server');
var webpack=require('webpack');
var webpackConfig=require('./webpack-dev-config');
var compiler=webpack(webpackConfig);
var path=require('path');

var port=9000;
console.log(process.cwd());

var server=new webpackDevServer(compiler,{
	//webpack-dev-server 配置项
	contentBase:'./build',//相对于node的启动目录
	publicPath:webpackConfig.output.publicPath
});
server.listen(port,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('服务运行中，端口 '+ port);
	}
});