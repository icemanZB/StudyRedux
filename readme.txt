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

webpack 是德国开发者 Tobias Koppers 开发的模块加载器兼打包工具，在 webpack 中，他能把各种资源，
例如js(含JSX)、coffee、样式(含less/sass)、图片等都作为模块来使用和处理。因此，Webpack 当中 js 可以
引用 css，css中可以切入图片 dataUrl。

为什么要使用 webpack ？
webpack 是前端一个工具，可以让各个模块进行加载，预处理，再进行打包，它能有 Grunt 或 Gulp 所有基本功能。
优点如下：1、支持 commonJS 和 AMD 模块。2、支持很多模块加载器的调用，可以使模块加载器灵活定制，比如 babel-loader 
加载器，该加载器能够使我们使用 ES6 的语法来编写代码。3、可以通过配置打包成多个文件，有效的利用浏览器的缓存功能提升性能。
4、使用模块加载器，可以支持sass、less等处理器进行打包且支持静态资源样式及图片进行打包。



webpack 中，代码里面的 require 是webpack 提供的扩张项 ( require.js )
本地安装require不到全局的包，这是node的机制问题

package.js 中 'scripts' start 是 nodejs 中的一个关键词或者变量
如果想取其他的名字，需要使用 npm run test
package.json中的scripts属性可以用来简化指令，通过执行npm run-script来执行对应的指令。
 "scripts": {
    "test" : "webpack -p"
  }



Loaders 是 wepack 中最核心的功能。通过使用不同的loader，webpack通过调用外部脚本或工具可以对各种各样的格式
的文件进行处理，比如说分析JSON文件并把它转为JavaScript文件，或者说把下一代的JS文件(ES6、ES7)转为现在浏览器
可以识别的JS文件。或者说对React的开发而言，合适的Loaders可以把React的JSX文件转为JS文件


什么是WebPack，为什么要使用它？

为什要使用WebPack

现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。
为了简化开发的复杂度，前端社区涌现出很多好的实践方法。

模块化，让我们可以把复杂的程序细化为小的文件;
类似于TypeScript这种在JavaScript基础上拓展的开发语言：
使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能能装换为JavaScript文件使浏览器可以识别；
Scss，less等CSS预处理器
...
这些改进确实大大的提供了我们的开发效率，但是利用它们开发的文件需要进行额外的处理才能让浏览器识别,
手动处理非常复杂，这就为WebPack类的工具的出现提供了需求。

什么是Webpack

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些预设，
打包为合适的格式以供浏览器使用。

什么是全局安装？

安装位置

全局安装方式是键入命令：npm install webpack -g 或 npm install webpack --global，
其中参数-g的含义是代表安装到全局环境里面，包安装在Node安装目录下的node_modules文件夹中，
一般在 \Users\用户名\AppData\Roaming\ 目录下，可以使用npm root -g查看全局安装目录。

本地安装后可以直接通过require()的方式引入项目中node_modules目录下的模块

为什么全局安装还要本地安装？

仅仅全局安装够吗？

1.在js实例代码中，默认下node.js会在NODE_PATH和目前js所在项目下的node_modules文件夹下去寻找模块，
因此，如果只是全局安装，不能直接通过require()的方式去引用模块，需要手动解决包路径的配置问题，
当然你也可以复制全局安装的node_modules文件夹到项目下，
还有办法可以选择将环境变量的NODE_PATH设置为C:\Program Files\nodejs。

2.对于包的更新不好管理，可能你需要为每个包重新命名，如gulp@3.8.1、gulp@3.9.1...，
为了区别不同项目使用指定的包，保证模块之间的相互依赖，区别每个项目正常运行。
因此，不推荐只全局安装。

通常我们会将 Webpack 安装到项目的依赖中，这样就可以使用项目本地版本的 Webpack。

我们为什么需要Webpack？

现在的网站都在演变成为Web Apps:
页面上的JavaScript越来越多。
在现代浏览器上用户可以做更多的事情了。
整个页面重新加载的情况更少了，与此同时，页面上的代码量更大了。
结果就是：客户端的代码量变得越来越庞大，庞大的代码量意味着我们需要适当地组织代码，
而模块系统则提供了把代码分割成不同模块的功能。

伴随着移动互联的大潮，当今越来越多的网站已经从网页模式进化到了 Webapp 模式。
它们运行在现代的高级浏览器里，使用 HTML5、 CSS3、 ES6 等更新的技术来开发丰富的功能，
网页已经不仅仅是完成浏览的基本需求，并且webapp通常是一个单页面应用，
每一个视图通过异步的方式加载，这导致页面初始化和使用过程中会加载越来越多的 JavaScript 代码，
这给前端开发的流程和资源组织带来了巨大的挑战。


什么是 Webpack

Webpack 是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

