
项目搭建过程
======
### 安装依赖包

> npm install --save-dev webpack  
> npm install --save-dev webpack-dev-server  
> npm install --save-dev babel-loader babel-core  
> npm install --save-dev babel-preset-es2015 babel-preset-stage-0  
> npm install --save-dev babel-preset-react  
> npm install --save react react-dom  

支持redux
> npm install --save redux react-redux

支持 ES7 decorators
> npm install babel-plugin-transform-decorators-legacy --save-dev

支持DevTools
> npm install --save-dev redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor

支持router
> npm install --save react-router  

支持sass
>  npm install sass-loader node-sass style-loader css-loader --save-dev 

sass-loader 解析sass->css   
css-loader 解析css->commonJs  
style-loader 在页面创建style标签<style type="text/css"> 样式 </style>    
这样就可以直接在页面中使用样式了。   

支持bootstrap  
> npm install --save react-bootstrap bootstrap-sass  
bootstrap-sass v3   


### 等待研究
babel-preset-stage-0 包含的插件，支持哪些es6语法

### bug 及解决办法
#### 浏览器 ReferenceError: React is not defined -->b01
解决办法：  
增加插件    
```  
new webpack.ProvidePlugin({
    React: "react"
})
```
> 使React全局可用 开发react程序的时候，不用每次都import 'react'了  
> 另外一种解决办法就是在index.js 增加 import React from 'react'  
> 重现，请切换到b01分支  

### 版本历史
##### v0.1 
可以正常开发React应用  
##### v0.1.1
支持react-redux  
支持DevTools  
##### v0.1.2
支持路由   
##### v0.1.3
支持sass  
##### v0.1.4
支持css modules  



### 引用
[webpack 1.0 官网](https://webpack.github.io/)   
[webpack 2.0 官网](https://webpack.js.org/)   
[babel 官网](https://babeljs.io/)    
[css modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)   
