let merge             = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrors    = require('friendly-errors-webpack-plugin'),

    webpack           = require('webpack'),
    baseWebpackConfig = require('./webpack.base.conf'),
    config            = require('./config');

// 热模块加载，将热加载相关代码添加到 entry，用于浏览器自动刷新的时候去加载模块
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    // ["./build/dev-client","./src/module/index/index.html"]
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    module : {
        /**
		 * webpack 提供两个工具处理样式表：css-loader 和 style-loader
		 * style-loader 将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌 入webpack 打包后的文件中。
		 * css-loader 使你能够使用类似 @import 和 url(...) 的方法实现 require() 的功能
		 * sass-loader Sass 的预处理器是对原生 CSS 的拓展
		 * 安装 postcss-loader 和 autoprefixer (自动添加前缀的插件)
		 * 书写顺序必须是这样
		 */
        loaders: [
            {
                // 局部 css 样式用 css module，全局样式为了要覆盖 ant design 就不使用 css module
                // loaders 之间是可以串联的，一个加载器的输出可以作为下一个加载器的输入
		        // "!" 用来定义 loader 的串联关系，"-loader" 是可以省略不写的，多个 loader 之间用 "!" 连接起来，但所有的加载器都需要通过 npm 来加载。
                test   : /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test   : /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test   : /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // 要启用 source-map 需加上此配置项
    devtool: '#eval-source-map',
    plugins: [
        // 开发过程中都不需要刷新浏览器，任何前端代码的更改都会实时的在浏览器中表现出来
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        // HtmlWebpackPlugin 自动帮你生成一个 html 文件，并且引用相关的 css,js 文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.commonPath.src + '/index_build.html',
            inject  : true
        }),

        // 控制台错误有好提示
        new FriendlyErrors()
    ]
});
