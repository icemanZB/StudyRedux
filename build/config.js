let path     = require("path"),
    rootPath = path.resolve(__dirname, '../'),
    src      = path.join(rootPath, 'src');

module.exports = {
	build     : {
		assetsRoot         : path.resolve(__dirname, '../dist'),
		assetsSubDirectory : 'static',
		assetsPublicPath   : '/',
		productionSourceMap: true
	},
	dev       : {
		port              : 8089,
		assetsSubDirectory: 'static',
		assetsPublicPath  : '/',
		proxyTable        : {
			'/api': {
				target     : ['http://99.48.210.179:8090', 'http://172.30.11.179:8090', 'http://192.168.101.71:8089'][1],
				pathRewrite: {
					'^/api': '/'
				}
			}
		},
		cssSourceMap      : false
	},
	commonPath: {
		rootPath  : rootPath,
		staticPath: path.posix.join('/', 'static'),
		fallback  : path.join(rootPath, 'node_modules'),
		src       : src,
		actions   : path.join(src, 'actions'),
		assets    : path.join(src, 'assets'),
		components: path.join(src, 'components'),
		constants : path.join(src, 'constants'),
		containers: path.join(src, 'containers'),
		filters   : path.join(src, 'filters'),
		reducers  : path.join(src, 'reducers'),
		services  : path.join(src, 'services'),
		store     : path.join(src, 'store')
	}
};
