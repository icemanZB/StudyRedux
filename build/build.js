// https://github.com/shelljs/shelljs
// 使用了 shelljs 插件，可以让我们在 node 环境的 js 中使用 shell
require('shelljs/global');

var path = require('path');
var config = require('../config');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = '"production"';
}

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
);

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
// https://www.npmjs.com/package/shelljs
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'static/*', assetsPath);

webpack(webpackConfig, function (err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});
