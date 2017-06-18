var path     = require("path"),
    rootPath = path.resolve(__dirname, '../'),
    src      = path.join(rootPath, 'src');

module.exports = {
    build     : {
        assetsRoot              : path.resolve(__dirname, '../dist'),
        assetsSubDirectory      : 'static',
        assetsPublicPath        : '/',
        productionSourceMap     : true,
        productionGzip          : false,
        productionGzipExtensions: ['js', 'css']
    },
    dev       : {
        port              : 8080,
        assetsSubDirectory: 'static',
        assetsPublicPath  : '/',
        // 通过 node 服务器进行转发
        proxyTable        : {
            '/api': {
                target: ['http://localhost:8080/'][0]
            }
        },
        cssSourceMap      : false
    },
    commonPath: {
        rootPath  : rootPath,
        staticPath: path.posix.join('/', 'static'),
        fallback  : path.join(rootPath, 'node_modules'),
        src       : src,
        assets    : path.join(src, 'assets'),
        components: path.join(src, 'components'),
        filters   : path.join(src, 'filters'),
        services  : path.join(src, 'services')
    }
};
