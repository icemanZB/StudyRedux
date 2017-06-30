let config = require('./config'), fs = require('fs');

module.exports = {
	entry        : {
		'index': './src/index.js'
	},
	output       : {
		path         : config.build.assetsRoot,
		publicPath   : config.dev.assetsPublicPath,
		filename     : '[name].js',
		chunkFilename: '[name].chunk.js'
	},
	resolve      : {
		extensions: ['', '.js', '.jsx'],
		fallback  : [config.commonPath.fallback],
		alias     : {
			'src'       : config.commonPath.src
		}
	},
	resolveLoader: {
		fallback: [config.commonPath.fallback]
	},
	module       : {
		loaders: [
			{
				test   : /\.jsx?$/,
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
		require('autoprefixer')
	]
};
