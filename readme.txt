#查看 webpack 版本信息
npm info webpack

# 安装指定版本的 webpack
npm install webpack@1.12.x --save-dev


"dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-router": "^3.0.0",
    "redux": "^3.6.0",
    "redux-logger": "^2.8.0",
    "redux-thunk": "^2.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^6.6.1",
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-plugin-import": "^1.1.0",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "babel-preset-stage-1": "^6.16.0",
    "babel-preset-stage-2": "^6.18.0",
    "classnames": "^2.2.5",
    "clean-webpack-plugin": "^0.1.15",
    "css-loader": "^0.26.1",
    "express": "^4.14.0",
    "express-urlrewrite": "^1.2.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "html-webpack-plugin": "^2.26.0",
    "http-proxy-middleware": "^0.17.3",
    "json-loader": "^0.5.4",
    "less": "^2.7.2",
    "less-loader": "^2.2.3",
    "node-sass": "^4.2.0",
    "opn": "^4.0.2",
    "ora": "^0.4.1",
    "postcss-loader": "^1.2.2",
    "sass": "^0.5.0",
    "sass-loader": "^4.1.1",
    "shelljs": "^0.7.6",
    "style-loader": "^0.13.1",
    "webpack": "^1.15.0",
    "webpack-dev-middleware": "^1.9.0",
    "webpack-hot-middleware": "^2.15.0",
    "webpack-merge": "^2.4.0"
  }




1. npm init 创建 package.json
2. npm install webpack --save-dev
   npm install react react-dom react-router --save
   // babel 其实是几个模块化的包，其核心功能位于称为 babel-core 的 npm 包中
   // babel-preset-es2015 解析Es6
   // babel-preset-react 解析JSX
   // babel-plugin-transform-runtime 类似帮助函数 _defineProperty 可能会重复出现在一些模块里，导致编译后的代码体积变大。
   // Babel 为了解决这个问题，提供了单独的包 babel-runtime 供编译模块复用工具函数。
   // babel-preset-stage-2 ES7不同阶段语法提案的转码规则（共有4个阶段）
   npm install babel-core babel-loader  babel-preset-es2015 babel-preset-react babel-plugin-transform-runtime babel-preset-stage-2 --save-dev
   npm install clean-webpack-plugin --save-dev
   // css-loader 使能够使用类似 @import 和 url(...) 的方法实现 require()的功能，它对 CSS Modules 的支持最好
   // https://github.com/css-modules/webpack-demo
   // style-loader 将所有的计算后的样式加入页面中
   npm install style-loader css-loader --save-dev
   // css 预处理器，sass-loader 依赖 node-sass 和 sass
   npm install sass sass-loader --save-dev
   // node-sass 安装不上，使用 淘宝的 npm install -g cnpm --registry=https://registry.npm.taobao.org
   cnpm install node-sass --save-dev
   // html-webpack-plugin 自动创建 html 文件 https://github.com/ampedandwired/html-webpack-plugin
   npm install html-webpack-plugin --save-dev
   // webpack-merge   https://www.npmjs.com/package/webpack-merge
   npm install webpack-merge --save-dev
   // http-proxy-middleware   node 代理，转发所有请求代理到真实的后端真实API地址  https://www.npmjs.com/package/http-proxy-middleware
   npm install http-proxy-middleware --save-dev
   // opn  打开默认浏览器
   npm install opn --save-dev
   // webpack-dev-middleware 就是一个运行于内存中的文件系统，也是 express 的中间件。https://github.com/webpack/webpack-dev-middleware/
   // webpack-hot-middleware 热替换
   npm install webpack-dev-middleware webpack-hot-middleware --save-dev
   // friendly-errors-webpack-plugin 友好的错误提示
   npm install friendly-errors-webpack-plugin --save-dev
   // express
   npm install express --save-dev
   // json-loader
   npm install json-loader --save-dev
   // postcss-loader https://www.npmjs.com/package/postcss-loader
   npm install postcss-loader autoprefixer --save-dev
   // 把 css 从 js 文件中提取出来，放到一个单独的 css 文件中  https://github.com/webpack/extract-text-webpack-plugin
   npm install extract-text-webpack-plugin --save-dev
   // ora 优雅的终端器  https://www.npmjs.com/package/ora
   npm install ora --save-dev
   // shelljs 可以让我们在 node 环境的 js 中使用 shell
   npm install shelljs --save-dev
   // clean-webpack-plugin 用于在building之前删除你以前build过的文件
   npm install clean-webpack-plugin --save-dev
   // classnames 方便处理class
   npm install classnames --save-dev
   // isomorphic-fetch 处理 ajax 提交
   // es6-promise es6 兼容处理
   npm install isomorphic-fetch es6-promise --save
   // js-cookie cookie 处理
   npm install js-cookie --save
   // antd UI
   npm install antd --save
   // babel-plugin-import 支持 antd 按需 js 和 css 同时按需加载。 https://github.com/ant-design/babel-plugin-import
   npm install babel-plugin-import --save-dev
   // 由于 antd 是基于 less，所以要安装less，按需引用 https://github.com/webpack-contrib/less-loader
   npm install less less-loader --save-dev
   // reflux
   npm install reflux --save




   // npm install express-urlrewrite --save-dev

   // babel-preset-stage-1  处理异步加载语法
   // npm install babel-preset-stage-1 --save-dev


   // 使用 react 编写代码时，能让修改的部分自动刷新。但这和自动刷新网页是不同的，因为 hot-loader 并不会刷新网页，而仅仅是替换你修改的部分
   // react-hot-loader 依赖 webpack-dev-server
   npm install webpack-dev-server react-hot-loader --save-dev
