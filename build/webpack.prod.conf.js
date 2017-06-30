let path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    TransferWebpackPlugin = require('transfer-webpack-plugin'),

    baseWebpackConfig = require('./webpack.base.conf'),
    config = require('./config'),
    utils = require('./utils');

module.exports = merge(baseWebpackConfig, {
    module: {
        // 使用 extract-text-webpack-plugin 就可以把 css从 js 中独立抽离出来
        // 'style-loader' 一定要单独处理写在前面
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].js?v=' + utils.getVersion() + '',
        // filename     : 'js/[name].[chunkhash].js',
        /**
         * chunkFilename 用来打包 require.ensure 方法中引入的模块，如果该方法中没有引入任何模块则不会生成任何 chunk 块文件
         * chunk 的 hash 值只有在 require.ensure 中引入的模块发生变化，hash 值才会改变
         * 注意：对于不是在 ensure 方法中引入的模块，此属性不会生效，只能用 CommonsChunkPlugin 插件来提取
         */
        chunkFilename: 'js/[name].js?v=' + utils.getVersion() + ''
    },
    plugins: [

        // 使用 webpack 的 DefinePlugin 来指定生产环境，以便在压缩时可以让 UglifyJS 自动删除代码块内的警告语句
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        // 清空生成目录
        new CleanWebpackPlugin('dist/', {
            root: path.resolve(__dirname, '..'),
            verbose: true
        }),

        // js 压缩
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),

        
        new webpack.optimize.OccurrenceOrderPlugin(),

        // 提取 css
        new ExtractTextPlugin('css/[name].css?v=' + utils.getVersion() + ''),

        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../src/index_build.html'),
            title: 'test',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
                return (
                    module.resource &&
                    /\.js|\.less$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),

        // 复制高度静态资源
        new TransferWebpackPlugin(
            [{
                from: 'static/',
                to: '/static/'
            }], config.commonPath.rootPath
        )

    ]
});