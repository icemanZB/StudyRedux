var config = require('../config');
var fs = require('fs');
var path = require('path');

module.exports = {
    entry        : {
        'index': './src/index.js'
    },
    output       : {
        path      : config.build.assetsRoot,
        publicPath: config.dev.assetsPublicPath,
        filename  : '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve      : {
        extensions: ['', '.js', '.jsx'],
        fallback  : [config.commonPath.fallback],
        alias     : {
            'src'       : config.commonPath.src,
            'assets'    : config.commonPath.assets,
            'components': config.commonPath.components
        }
    },
    resolveLoader: {
        fallback: [config.commonPath.fallback]
    },
    module       : {
        loaders: [
            {
                test   : /\.jsx?$/,
                // loaders: ['react-hot', 'babel-loader'],
                loader : 'babel',
                include: config.commonPath.src,
                exclude: /node_modules/
            },
            {
                test  : /\.json$/,
                loader: 'json'
            }

        ]
    },
    postcss      : [
        // require('autoprefixer')({
        //     browsers: ['last 2 versions']
        // })
        require('autoprefixer') // 调用 autoprefixer 插件
    ]
};
