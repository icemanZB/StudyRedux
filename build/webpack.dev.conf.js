var config = require('../config');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');

// 将热加载相关代码添加到输入块中
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    module : {
        loaders: [
            {
                test   : /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test   : /\.scss$/,
                // loader: "style-loader!css-loader?modules" 这种写法是错误的，一定要写成下面这样，类似 style-loader?modules、css-loader?modules
                // css-loader 默认的哈希算法是[hash:base64]，这会将编译成类似 ._3zyde4l1yATCOkgn-DBWEL 这样的字符串
                // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test   : /\.less$/,
                // loader: "style!css!less"
                loaders: [
                    'style-loader',
                    // css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5] 这里不能加 css modules，这样样式就会找不到
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    devtool: '#eval-source-map',
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        // 开发过程中都不需要刷新浏览器，任何前端代码的更改都会实时的在浏览器中表现出来
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.commonPath.src + '/index_build.html',
            inject  : true
        }),
        new FriendlyErrors()
    ]
});
