var path = require('path');
var config = require('../config');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    module : {
        loaders: [
            {
                test  : /\.css$/,
                // ExtractTextPlugin.extract([notExtractLoader], loader, [options]) 必须这样写
                // extract-text-webpack-plugin No Hot Module Replacement。不能热更新。
                // extract-text-webpack-plugin 官网是这么解释的 Extract text from bundle into a file. 把额外的数据加到编译好的文件中
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            },
            {
                test  : /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader!postcss-loader')
            },
            {
                test  : /\.less$/,
                loader:ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
            }
        ]
    },
    postcss: [
        require('autoprefixer') // 调用 autoprefixer 插件
    ],
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output : {
        path         : config.build.assetsRoot,
        filename     : 'js/[name].js?v=' + utils.getVersion() + '',
        chunkFilename: 'js/[name].js?v=' + utils.getVersion() + ''
        // filename     : utils.assetsPath('js/[name].[chunkhash].js'),
        // chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // 使用 Webpack 的 DefinePlugin 来指定生产环境，以便在压缩时可以让 UglifyJS 自动删除代码块内的警告语句
        // 处理 console.warning It looks like you're using a minified copy of the development build of React
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        // 清空生成目录
        new CleanWebpackPlugin('dist/', {
            root   : path.resolve(__dirname, '..'),
            verbose: false
        }),

        // JS 压缩
        // https://github.com/mishoo/UglifyJS2#usage
        new webpack.optimize.UglifyJsPlugin({
            output  : {
                comments: false  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),

        //  根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurrenceOrderPlugin(),

        new ExtractTextPlugin('css/[name].css?v=' + utils.getVersion() + ''),


        // 生成 html 文件
        new HtmlWebpackPlugin({
            //  输出的 HTML 文件名
            filename      : path.resolve(__dirname, '../dist/index.html'),
            // 模板文件路径
            template      : path.resolve(__dirname, '../src/index_build.html'),
            // 如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部
            inject        : true,
            // 传递 html-minifier 选项给 minify 输出，false就是不使用html压缩
            minify        : {
                removeComments       : true,
                collapseWhitespace   : true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            // 允许控制块在添加到页面之前的排序方式
            chunksSortMode: 'dependency'
        }),


        // 公共模块的提取
        new webpack.optimize.CommonsChunkPlugin({
            name     : 'vendor',// 生成文件的名字
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js|\.less$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),


        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        // 包后的 vendor 文件 hash 值改变了，为了解决这个问题
        new webpack.optimize.CommonsChunkPlugin({
            name  : 'manifest',
            chunks: ['vendor']
        }),

        // 删除静态的 json 文件
        new CleanWebpackPlugin('dist/static/json', {
            root   : path.resolve(__dirname, '..'),
            verbose: false
        })

        // new CopyWebpackPlugin([ // 复制高度静态资源
        //     {
        //         from  : path.resolve(__dirname, '../static'),
        //         to    : path.resolve(__dirname + '../test')
        //     }
        // ])

    ]
});



