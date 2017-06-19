let path                  = require('path'),
    webpack               = require('webpack'),
    merge                 = require('webpack-merge'),
    ExtractTextPlugin     = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin     = require('html-webpack-plugin'),
    CleanWebpackPlugin    = require('clean-webpack-plugin'),
    TransferWebpackPlugin = require('transfer-webpack-plugin'),

    baseWebpackConfig     = require('./webpack.base.conf'),
    config                = require('./config'),
    utils                 = require('./utils');

module.exports = merge(baseWebpackConfig, {
	module : {
		loaders: [
			{
				test  : /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
			},
			{
				test  : /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader')
			},
			{
				test  : /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader?{"modifyVars":{\'primary-color\':\'@green-5\'}}')
			}
		]
	},
	devtool: config.build.productionSourceMap ? '#source-map' : false,
	output : {
		path         : config.build.assetsRoot,
		filename     : 'js/[name].js?v=' + utils.getVersion() + '',
		chunkFilename: 'js/[name].js?v=' + utils.getVersion() + ''
	},
	plugins: [

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),

		new CleanWebpackPlugin('dist/', {
			root   : path.resolve(__dirname, '..'),
			verbose: true
		}),

		new webpack.optimize.UglifyJsPlugin({
			output  : {
				comments: false
			},
			compress: {
				warnings: false
			}
		}),

		new webpack.optimize.OccurrenceOrderPlugin(),

		new ExtractTextPlugin('css/[name].css?v=' + utils.getVersion() + ''),

		new HtmlWebpackPlugin({
			filename      : path.resolve(__dirname, '../dist/index.html'),
			template      : path.resolve(__dirname, '../src/index_build.html'),
			title         : 'sp',
			inject        : true,
			minify        : {
				removeComments       : true,
				collapseWhitespace   : true,
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
			name  : 'manifest',
			chunks: ['vendor']
		}),

		// 复制高度静态资源
		new TransferWebpackPlugin(
			[{ from: 'static/img', to: '/static/img' }], config.commonPath.rootPath
		)

	]
});



