let path = require("path"),
	rootPath = path.resolve(__dirname, '../'),
	src = path.join(rootPath, 'src');

module.exports = {
	build: {
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false
	},
	dev: {
		port: 8080,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/api': {
				target: 'http://172.30.11.10',
				// pathRewrite: {
				// 	'^/api': '/'
				// }
			}
		},
		cssSourceMap: false
	},
	commonPath: {
		rootPath: rootPath,
		staticPath: path.posix.join('/', 'static'),
		fallback: path.join(rootPath, 'node_modules'),
		src: src
	}
};