let merge             = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrors    = require('friendly-errors-webpack-plugin'),

    webpack           = require('webpack'),
    baseWebpackConfig = require('./webpack.base.conf'),
    config            = require('./config');


Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    module : {
        loaders: [
            {
                // 局部 css 样式用 css module，全局样式为了要覆盖 ant design 就不使用 css module
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
                    'less-loader?{"modifyVars":{\'primary-color\':\'@green-5\'}}'
                ]
            }
        ]
    },
    devtool: '#eval-source-map',
    plugins: [
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
