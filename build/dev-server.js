const path = require('path');
// '../config' => '../config/index.js'
const config = require('../config');
const fs = require('fs');

const express = require("express");
const app = express();

// 代理
const proxyMiddleware = require('http-proxy-middleware');

// 代理配置
const proxyTable = config.dev.proxyTable;

const webpackConfig = require('./webpack.dev.conf');

// npm run dev 自动打开浏览器
var opn = require('opn');

// 设置默认端口
const port = config.dev.port;

const webpack = require('webpack');

const compiler = webpack(webpackConfig);

// express 提供的 dev 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    // publicPath 是必选
    publicPath: webpackConfig.output.publicPath,
    // http://webpack.github.io/docs/node.js-api.html
    stats     : {
        colors: true,
        chunks: false
    }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

// 当 html-webpack-plugin 的模板改变时，强制刷新页面
// compilation => 编译，对于 compiler 的扩展
compiler.plugin('compilation', function (compilation) {

    // after-emit 编译完成以后
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // publish 发布
        hotMiddleware.publish({action: 'reload'});
        cb();
    });

});

// 代理转换
// Object.keys(proxyTable) => ['/api']
Object.keys(proxyTable).forEach(function (context) {

    var options = proxyTable[context];

    if (typeof options === 'string') {
        options = {target: options};
    }

    if (options.target.indexOf("localhost") >= 0) {
        options.pathRewrite = (path) => {
            if (path.indexOf("?") >= 0) {
                return path.replace('/api/', '/static/json/').replace("?", ".json?");
            }
            return path.replace('/api/', '/static/json/') + '.json';
        };
    }
    
    // eg. proxyMiddleware('/api', { target: 'http://99.48.210.174:8080/' })
    app.use(proxyMiddleware(context, options));

});


app.use(devMiddleware);

app.use(hotMiddleware);

// 纯静态资源处理
// 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了
// 所有文件的路径都是相对于存放目录的，因此存放静态文件的目录名不会出现在 URL 中
// express.static 访问的文件都存放在一个"虚拟(virtual)"目录(即目录根本不存在)下面，可以通过为静态资源目录指定一个挂载路径的方式来实现
app.use(config.commonPath.staticPath, express.static('./static'));

// 将其他路由，全部返回 index.html
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../src', 'index.html'));

});

app.use(config.commonPath.staticPath, function (req, res, next) {
    // 处理静态 json 的 POST 请求
    if (req.method.toUpperCase() == 'POST' && req.url.indexOf('.json') != -1) {
        var filePath = path.resolve(__dirname, '../static' + req.url);
        //console.log('----------', req.method, filePath, '----------');
        fs.readFile(filePath, function (err, contents) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(contents);
            res.end();
        });
    }
    else {
        next();
    }
});


module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + port + '\n');

    var uri = 'http://localhost:' + port;
    // opn(uri);

});

