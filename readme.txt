#查看 webpack 版本信息
npm info webpack

# 安装指定版本的 webpack
npm install webpack@1.14.0 --save-dev

cnpm install node-sass --save-dev


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


https://github.com/zwhu/blog/issues/17  Node.js 中 module.exports 和 exports 的区别







参考
babel-polyfill、babel-plugin-transform-runtime
https://segmentfault.com/a/1190000006930013?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io#articleHeader5

https://segmentfault.com/q/1010000005596587  babel的polyfill和runtime的区别

https://segmentfault.com/a/1190000005742111  webpack进阶之loader篇

http://www.tuicool.com/articles/MruEni
关于 webpack-dev-middleware

对于 webpack-dev-middleware，最直观简单的理解就是一个运行于内存中的文件系统。
你定义了 webpack.config，webpack 就能据此梳理出所有模块的关系脉络，
而 webpack-dev-middleware 就在此基础上形成一个微型的文件映射系统，
每当应用程序请求一个文件——比如说你定义的某个 entry ，
它匹配到了就把内存中缓存的对应结果作为文件内容返回给你，反之则进入到下一个中间件。

因为是内存型的文件系统，所以 rebuilding 的速度非常快，
因此特别适合于开发阶段用作静态资源服务器；又因为 webpack 可以把任何一种资源都当作是模块来处理，
因此它完全可以取代其他的 HTTP 服务器。
事实上，大多数 webpack 用户用过的 webpack-dev-server
就是一个 express＋webpack-dev-middleware 的实现。
二者的区别仅在于 webpack-dev-server 是封装好的，
除了 webpack.config 和命令行参数之外，你很难去做定制型开发，
所以它是适合纯前端项目的辅助工具。
而 webpack-dev-middleware 是中间件，你可以编写自己的后端服务然后把它整合进来，
相对而言就自由得多了。我们做的是一个前后同构的应用，因此 webpack-dev-server 就不予考虑了。

http://www.cnblogs.com/nmxs/p/6206306.html   vue2.0 全配置注释

http://www.cnblogs.com/tugenhua0707/p/5576262.html#_labe2  webpack 构建

http://blog.csdn.net/code_for_free/article/details/51583737 webpack 优化

http://cnodejs.org/topic/58396960c71e606e36aed1db CommonsChunkPlugin 中的 manifest

http://react-china.org/t/webpack-output-filename-output-chunkfilename/2256  怎么理解webpack中的output.filename 和output.chunkFilename

http://www.cnblogs.com/libin-1/p/6596810.html   vue-cli中的webpack配置

http://www.tuicool.com/articles/nEJRri  Babel下的ES6兼容性与规范

http://www.ruanyifeng.com/blog/2016/01/babel.html  babel 教程，可以搜索 babel-polyfill 与 babel-runtime 阮一峰

https://segmentfault.com/q/1010000007401974?_ea=1337523  Webpack怎么加入babel-polyfill

https://segmentfault.com/a/1190000004944322  吐槽一下vue-loader，vue-loader 是一个加载器，能把如下格式的 Vue 组件转化成JavaScript模块。

http://www.cnblogs.com/lvyongbo/p/5953464.html  vue-loader

http://jiongks.name/blog/just-vue/  囧克斯 Vue + webpack 项目实践

https://www.mmxiaowu.com/article/58482558d4352863efb55475  Vue2 dist 目录下各个文件的区别

需要把importLoaders设置为2，也就是说：
{test: /.less$/, loader: 'style!css?importLoaders=2!autoprefixer!less'}
表明你在某个less文件中import进来的资源（其它的less文件）会被使用autoprefixer和less 这两个loader解析

如果按照你最开始的设置：
{test: /.less$/, loader: 'style!css?importLoaders=1!autoprefixer!less'}
表明你在某个less文件中import进来的资源（其它的less文件）只会被使用autoprefixer这一个loader解析，就会报错

webpack css loader中关于importLoaders的解释很不友好

https://www.zhihu.com/question/39814405/answer/83298261  webpack 的问题 重要












form 表单
http://react-component.github.io/form/
https://github.com/react-component/form#optiongetvaluefromevent
https://github.com/yiminghe/async-validator#rules

fetch 设置
http://www.open-open.com/lib/view/open1426815580164.html

// list 要使用 redux 的 state

Miscrosoft visio 破解，单位电脑有了 2003 的版本

https://segmentfault.com/a/1190000002909224  immutableA

http://zhenhua-lee.github.io/react/redux.html  必看 研究

http://zhenhua-lee.github.io/react/history.html  必看 研究

https://yq.aliyun.com/articles/3168  必看 研究 json 数据

http://www.cnblogs.com/geoffgu/p/6035910.html  必看 研究 react+redux渲染性能优化原理

https://github.com/lcxfs1991/blog/issues/8  必看 研究 性能优化 React移动web极致优化

http://yunlaiwu.github.io/blog/2016/12/01/react+redux+immutablejs/

修改表单后，检查 detail 取的数据是否是最新的，如果不是是否要更新 redux 中的state，或者加时间戳去拿最新的数据

https://github.com/guox191/antd-redux

http://humyang.github.io/2016/ciqzftaxp0000l735q59ah641/   react-router-redux 翻译

http://www.alloyteam.com/2016/02/code-split-by-routes/  require.ensure()

https://github.com/trix/nano  7行代码的库研究，最简单的mvc，字符串拼接

settings->keymap split 设置 ctrl + \

http://imweb.io/topic/57e73d2bf19a1ca363927b95  vscode

https://www.zhihu.com/question/33629737?rf=46426597  知乎 ant design

https://github.com/SimpleUI-Group/SimpleUI  vue ui 框架

https://segmentfault.com/a/1190000004660311  react-hot

http://www.cnblogs.com/zhuyang/p/5000154.html

http://blog.csdn.net/xiebaochun/article/details/51917580

https://segmentfault.com/a/1190000005866410  webpack 单页应用

http://www.tuicool.com/articles/yEnqqiV   一次 React+Redux 实践及思考

https://www.v2ex.com/t/274697  classnames 处理 React 最佳实践

http://stackoverflow.com/questions/37311972/react-doesnt-switch-to-production-mode  React doesn't switch to production mode

https://segmentfault.com/a/1190000004703040  搭建服务端

http://blog.csdn.net/z69183787/article/details/51934181  react 实践

https://github.com/jovey-zheng/react-start-kit

http://cnodejs.org/topic/5865a866189fd5ad6459006c  React.js服务端渲染开发环境

https://zhuanlan.zhihu.com/p/20799258?refer=jscss  react-router

https://segmentfault.com/a/1190000007141049  异步加载路由

http://stackoverflow.com/questions/36194806/invariant-violation-the-root-route-must-render-a-single-element-error-in-react  router

https://segmentfault.com/q/1010000006780456?_ea=1129773 打包异步 router

http://www.tuicool.com/articles/emayQ3  异步路由

https://segmentfault.com/a/1190000003810652#articleHeader2  fetch

http://www.tuicool.com/articles/M7NRr27 封装 fetch

https://github.com/matthew-andrews/isomorphic-fetch  isomorphic-fetch

http://blog.csdn.net/haihuan2004/article/details/52511042  fetch() cookie 身份验证

在Fetch请求里发送用户身份凭证信息
如果你想在fetch请求里附带cookies之类的凭证信息，可以将 credentials参数设置成 “include” 值。

fetch(url, {
  credentials: 'include'
})


https://github.com/github/fetch

https://www.npmjs.com/package/node-fetch

待研究：import NProgress from 'nprogress';  进度条加载 参考 cobish

class Element extends Component {

  componentDidMount = () => {
    fetch('url-xxx')
      .then(res => res.json())
      .then(this.setState({
        //...
      }););
  }

  render = () => {
    // return (...);
  }
}

https://github.com/js-cookie/js-cookie

https://segmentfault.com/a/1190000006716454  formData

https://github.com/ant-design/ant-design


redux 没那么复杂  就3个关键点就行
action 存放操作   reducer 存放方法
mapstatetoprops 转成props

{
    "presets": [ "es2015", "stage-0", "react"],
    "plugins": [["import", {
        "libraryName": "antd",
        "style": true
    }]]
}

  webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: 'css'
    }]);


https://github.com/springhack/TopMesssage  antd

https://segmentfault.com/a/1190000006727526    transform-decorators-legacy

http://blog.csdn.net/h416756139/article/details/51728485   React 移动 web 极致优化 transform-decorators-legacy

webpack-bundle-analyzer 研究下

flex 布局研究下

https://github.com/mzabriskie/axios

import axios from 'axios'
Vue.prototype.$http = axios

axios 处理 ajax
// 代码研究
app.use(config.commonPath.staticPath, function (req, res, next) {
    if (req.method.toUpperCase() == 'POST' && req.url.indexOf('.json') != -1) {
        var filePath = path.resolve(__dirname, '../static' + req.url);
        fs.readFile(filePath, function (err, contents) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(contents);
            res.end();
        });
    }
    else {
        next();
    }
});

https://segmentfault.com/q/1010000007908719  axios promise 兼容

http://babeljs.io/docs/usage/polyfill/  babel-polyfill 处理兼容 axios 的 promise

https://github.com/zloirock/core-js#commonjs  core-js

https://github.com/stefanpenner/es6-promise   es6-promise 兼容

http://ask.dcloud.net.cn/article/205  深入理解高度。获取屏幕、webview、软键盘高度 - DCloud问答

http://www.alloyteam.com/2016/03/using-react-to-write-a-simple-activity-pages-design-of-operating-system-article/  学习

https://github.com/luozhihao/react-antd-demo   antd demo

https://github.com/xianyulaodi/React-router  demo

https://github.com/yuyang041060120/react-reflux

https://github.com/reflux/refluxjs

http://www.cnblogs.com/lovesueee/p/4893218.html  reflux

http://www.cnblogs.com/chyingp/p/reflux-async-action.html  reflux 异步

http://www.cnblogs.com/lewis617/p/5129609.html   reflux 入门

https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.gnv1ltjlx  flux 理解

http://blog.krawaller.se/posts/the-reflux-data-flow-model/

reflux 结合 fetch

actions就是组件的动作，store用于执行actions的命令，并返回一个state对象给组件。组件通过state来更新界面。

import React,{ Component } from 'react';

class $VAR$ extends Component{
    render(){
        return (
            <div>
                $VAR$
            </div>
        )
    }
}

export default $VAR$

源码解析
http://blog.csdn.net/bgk083/article/details/50867365   redux学习笔记之<combineReducers源码解析>
 
http://www.cnblogs.com/chyingp/p/redux-source-insight.html  Redux系列x：源码解析

reselect ?
immutable ?

函数式编程、currying、数据范式

https://www.w3ctech.com/topic/1561  深入浅出 - Redux

http://react-china.org/t/react-redux-immutablejs/9948  React + Redux + Immutablejs开发总结

http://blog.csdn.net/fengyinchao/article/details/51566555  实例讲解基于 React+Redux 的前端开发流程

https://github.com/acdlite/redux-actions  react-action

https://github.com/acdlite/flux-standard-action  action 规范

http://www.tuicool.com/articles/yEnqqiV  一次 React+Redux 实践及思考

https://github.com/wxyyxc1992

https://github.com/fwon/blog-app  博客例子

https://github.com/liyatang/redux-async-actions-reducers 按需加载 reducers?

redux-actions？

https://github.com/acdlite/flux-standard-action  action 规范

优化 action reducer

路由处理

https://zhuanlan.zhihu.com/p/20799258?refer=jscss
http://react-china.org/t/react-router-hashhistory-browserhistory/6799/11
https://www.npmjs.com/package/history





1、去掉 webstrom 自动保存： https://www.zhihu.com/question/30164835
在 File -> Settings -> Appearance & Behavior -> System Settings 中的最后一项去掉勾
"Synchronize files on frame or editor tab activation"   ( 激活当前窗口时保存 )
"Save files on frame deactivation"   切换到其他窗口的时候( 当前窗口没有被激活 )保存
"Use safe write"( save changes to a temporary file first )
安全写入，方法就是重命名源文件，只要能重命名成功就会覆盖掉源文件来达到安全自动保存的目的，所以这个安全会不停的保存源文件。关掉这个选项就只会在很少的情况下自动保存。
所有的四个选项全部关掉就只能手动保存。
File -> Settings -> Editor -> General -> Editor Tabs 中把 "Mark modified tabs width asterisk" 打上勾

// ---------------------------------------------------------------------------------------------------------------------

2、配置 .gitignore 文件，创建好这个文件后，然后把要忽略的文件名填进去，push 到 Git 上，下次这些文件就会被自动忽略。
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758404317281e54b6f5375640abbb11e67be4cd49e0000
忽略文件的原则是：
(1)、忽略操作系统自动生成的文件，比如缩略图等
(2)、忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的.class文件；
(3)、忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。
举个例子：
假设在 Windows 下进行 Python 开发，Windows 会自动在有图片的目录下生成隐藏的缩略图文件
如果有自定义目录，目录下就会有 Desktop.ini 文件，因此你需要忽略 Windows 自动生成的垃圾文件
Python 编译产生的.pyc、.pyo、dist 等文件或目录

有些时候，你想添加一个文件到 Git，但发现添加不了，原因是这个文件被 .gitignore 忽略了：
git add App.class
The following paths are ignored by one of your .gitignore files: App.class

如果你确实想添加该文件，可以用 -f 强制添加到 Git： $ git add -f App.class

或者你发现，可能是 .gitignore 写得有问题，需要找出来到底哪个规则写错了，可以用 git check-ignore 命令检查： git check-ignore -v App.class
.gitignore:3:*.class    App.class
Git 会告诉我们，.gitignore 的第 3 行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。

如果我在 master 加了 .gitignore 文件，当我切回某个分支的时候，分支也需要保持同步，直接把 master 分支 merge 到某个分支即可


// ---------------------------------------------------------------------------------------------------------------------

3、关于 webstrom 中使用 git：http://www.tuicool.com/articles/b2QNvq

// ---------------------------------------------------------------------------------------------------------------------

4、 nodejs 包管理工具 npm 的模块依赖 dependencies：http://www.07net01.com/2016/03/1389157.html
package.json 文件中的 dependencies 与 devDependencies 配置，决定了下载一个包后还需要如何下载依赖包；依赖包后面声明的版本配置则决定了其位置如何存放。

(1)、dependencies：package.json 中的 dependencies 列举了当前包/应用的依赖。 npm install <package_name> --save 会把 <package_name> 写入到 package.json 中。
如果只安装当前 package.json 下的 dependencies 依赖，可使用命令：npm install –production。

(2)、devDependencies：安装一个包时，添加了参数 --save-dev ，则会将该包添加到当前目录下 package.json 文件中的 devDependencies 中。
npm install <package_name> --save-dev

* --save 是对生产环境所需依赖的声明 ( 开发应用中使用的框架，库 )
* --save-dev 是对开发环境所需依赖的声明 ( 构建工具，测试工具 )

devDependencies 与 dependencies 的主要区别是区分开发与生产环境。
例如在生产环境中，当设置了 set NODE_ENV="production" ，则在执行 npm install 时， devDependencies 列表不会被安装。
比如，你写 ES6 代码，如果你想编译成 ES5 发布那么 babel 就是 devDependencies。其他类似一些工具类的，是需要安装到 devDependencies 的。 "--save-dev"
如果你用了 jQuery，由于发布之后还是依赖 jQuery，所以是 dependencies。  "--save"

* 开发的时候会自动去调用 dependencies 中的模块的，不需要重复安装。

(3)、optionalDependencies
添加了 –optional 参数，则尝试安装 optionalDependencies 中列出的依赖。这些依赖是可选的，默认不会被安装。 npm install –-save-optional

(4)、save 参数简写
在 npm3 中，–save、–save-dev 和 –save-optional、–save-bundle、–save-exact 都有对应的简写：

-S: --save
-D: --save-dev
-O: --save-optional
-B: --save-bundle
-E: --save-exact

(5)、save-exact
save-exact 与 –save, –save-dev 或 –save-optional 一起使用，用于设置要求保存为精确的版本号。如：npm install jquery --save-exact --save

(6)、GNU 规范版本号命名方法
常见的 npm 包命名方法以 GNU 规范为主。GNU 软件命名方案如下：主版本号.子版本号[ .修正版本号 [ 编译版本号]]
即：Major_Version_Number.Minor_Version_Number[Revision_Number[.Build_Number]]
一般约定的版本变更规则为：
a、主版本号：有重大变更，不对上一个变更版本作兼容保证时修改
b、子版本号：有新的功能增加时修改
c、修正版本号：一般为 bug 修复，功能增强
d、编译版本号：一般是编译器在编译过程中自动生成的，只定义其格式
e、从主版本号开始，有一级变更则后面的版本归零。
f、有些版本还会添加前缀标签，如： v1.0.0 。npm 默认识别的前缀即为 v ，也可以通过修改配置改变它。例如改为 s：npm config set tag-version-prefix='s'


配置npm的代理地址：( 由于伟大的墙的原因，会导致下载包很慢很慢~~~)，淘宝镜像
npm config set registry https://registry.npm.taobao.org

// ---------------------------------------------------------------------------------------------------------------------

5、windows 下删除 node_modules[文件名或扩展名太长]，导致删除失败
npm install -g rimraf
使用方法：cd xxx[include node_modules folder]rimraf nod_modules

// ---------------------------------------------------------------------------------------------------------------------

6、 webpack
(1)、npm install -g webpack 全局安装 webpack
(2)、进入到项目目录， npm init 命令可以自动创建 package.json 文件
(3)、npm install --save-dev webpack 安装 webpack 到项目目录


// ---------------------------------------------------------------------------------------------------------------------

7、 SASS 配置
(1)、安装 SASS 首先需要安装 ruby。
因为 SASS 依赖于 ruby 环境，安装 ruby 的时候，请勾选 Add Ruby executables to your PATH 这个选项添加环境变量，不然以后使用编译软件的时候会提示找不到 ruby 环境

(2)、安装完 ruby 之后，在开始菜单中，找到刚才安装的 ruby，打开 Start Command Prompt with Ruby，输入 gem install sass 按回车键确认
等待一段时间就会提示 sass 安装成功。由于有墙的原因，如果你没有安装成功，可以使用下面的方法(淘宝 RubyGems 镜像安装 SASS)。
PS：如果要安装 beta 版本的，可以在命令行中输入  gem install sass --pre

(3)、淘宝 RubyGems 镜像安装 SASS，由于国内网络原因，导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。
这时候我们可以通过 gem sources 命令来配置源，先移除默认的 https://rubygems.org 源，然后添加淘宝的源 https://ruby.taobao.org/
然后查看下当前使用的源是哪个，如果是淘宝的，则表示可以输入 sass 安装命令 gem install sass 了
gem sources --remove https://rubygems.org/
gem sources -a https://ruby.taobao.org/ ( 如果你系统不支持 https，请将淘宝源更换成：gem sources -a http://gems.ruby-china.org )
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
gem install sass

查看sass版本的命令行为
sass -v   ( 确保安装成功 )

(4)、在 webstrom 中配置 SASS 保存时编译，首先参照 "第一条"去掉 webstrom 中的自动编译。然后在 File -> Settings -> Tools -> File Watchers
添加监控文件，去掉 Immediate file synchronization  这勾，最后配置一些相应的参数内容：
"File type"：就是我们需要监视的文件类型，这里当然是 SASS
"Scope"：监视范围可以选择不同监视范围，这样就可以设置多个监视配置，输出对应不同的目录或者 module 下的 SASS文件
"Program"：C:\Ruby23-x64\bin\scss.bat   ( Program 是 SASS 编译工具的目录地址 )
"Arguments"：--no-cache --update $FileName$:$FileNameWithoutExtension$.css
"Working directory"：$FileDir$
"Output paths to refresh"：$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map

如果，想把 SCSS 源文件与生成后的 CSS 和 map 文件分开目录，则如下设置：
"Arguments": --no-cache --update $FileName$:$ProjectFileDir$\css\$FileNameWithoutExtension$.css

下面的输出参数，可以根据自己的需要填写，下面列出的是一些常用的参数
--style 表示解析后的 CSS 是什么格式，如：--style compressed，有四种取值分别为：nested、expanded、compact、compressed
--sourcemap 表示开启 sourcemap 调试。开启 sourcemap 调试后，会生成一个后缀名为.css.map 文件。 webstorm 是默认开启 sourcemap 的，所以可以不填写

// nested
#main {
  color: #fff;
  background-color: #000; }

// expanded
#main {
  color: #fff;
  background-color: #000;
}

// compact
#main { color: #fff; background-color: #000; }
#main p { width: 10em; }

// compressed
#main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}

(5)、调试 SASS  http://www.w3cplus.com/sassguide/debug.html
SASS 调试需要开启编译时输出调试信息和浏览器调试功能，两者缺一不可。
开启 sourcemap，则在解析的css文件同目录下生成一个 .css.map 的后缀名文件。
命令开启如下：sass --watch style.scss:style.css --sourcemap

谷歌浏览器调试
F12 打开调试面板，F1(settings) -> General 选项中勾选 Enable CSS source map 和 Auto-reload generated CSS，这样就可以看到原先右边的 CSS 文件变成了 SCSS 文件
点击 SCSS 文件，会跳到源文件中，现在可以在里面进行修改，修改完成后可以右键选择 save 或 save as 命令，然后替换本地的源文件
切换到 webstrom 后，会自动解析编译，然后刷新 chrome 就可以看到变化( 注意，解析样式需要一定时间 )。以后只要 ctrl+s 保存修改就可以了。

(6)、在 webstrom 中使用 Autoprefixer 的配置方法。git： https://github.com/postcss/autoprefixer
Autoprefixer 是一个后处理程序，不象 SASS 这样的预处理器。它适用于普通的 CSS，可以实现 css3 代码自动补全。也可以轻松跟 SASS 集成，在 CSS 编译前或编译后运行。
先安装 Autoprefixer npm install autoprefixer -g
Autoprefixer 其实是 postcss 的插件，所以还需安装 postcss  npm install postcss-cli -g
配置 External Tools：http://www.weste.net/2015/06-02/103795.html
File -> Settings -> Tools -> External Tools 点击新增按钮
"Name"：autoprefixer
"Program"：填入 postcss-cli 的路径 C:\Users\az6224\AppData\Roaming\npm\postcss.cmd
"Parameters"：-u autoprefixer -o $FileDir$/$FileName$  $FileDir$/$FileName$，你可以根据你自己的需要配置，具体参见 https://github.com/code42day/postcss-cli
Working directory :$ProjectFileDir$
配置好后，可以在 css，或 sass 文件中右键，就可以在右键菜单中看到 External Tools – autoprefixer，点击搞定
右键太麻烦的话，可以设置个快捷键，File -> Settings -> Keymap，搜索 External Tools，配置 autoprefixer 即可。 不要和原来的冲突就可以了。



1、clone 项目：进入文件夹，比如 cd d:，cd Code/textGit，git clone https://github.com/icemanZB/ProjectTest.git
2、设置 git 的全局的用户名和邮箱，帮 github 上面一样即可，方便在多人协作的时候让其他人知道是你提交的代码
   也是一样需要进入到项目目录，比如 cd d:，cd Code/textGit
   git config --global user.name "icemanZB"、git config --global user.email "254784109@qq.com"
   查看全局的邮箱或名字：git config --global user.email
3、查看所有 git 下面的配置 git config --list
4、[master]：指的是项目的主分支的默认名字
5、git add demo.html 把工作区的内容添加到暂存区， git add . 提交所有文件
6、git commit -m "注释" 把暂存区放到版本库，添加注释最好是英文
7、git status 查看状态
8、简写方式：git commit -a -m "注释" ( 这个命令省略了 add 的操作， -a 就是把工作区的文件添加到暂存区 )
9、 git log 查看提交的 log
10、git diff 是工作区和暂存区的对比、git diff --cached(--staged) 是暂存区和版本区的对比、git diff master(分支名称)工作区和版本库对比
11、从暂存区撤销回工作区 git reset HEAD filename
12、工作区还原 git checkout -- filename 当暂存区有内容，先去还原，暂存区没有的话就到版本区进行还原
13、撤销 commit 提交操作 git commit -m "change" --amend
14、退出的话是按 "q"
15、在工作区的文件可以随意删除
    如果 add 的话( 暂存区中 )，在把工作区中的 test.html 删除，现在使用 git rm test.html 把暂存区中文件删除了
    工作区中的文件没有删除的话，git rm test.html 是不起作用的，如果想删除的话需要使用 git rm -f test.html，这样暂存区和工作区都没有了
    使用 git rm --cached test.html 可以把暂存区 test.html 删除，而不删除工作区中的 test.html
16、恢复操作，需要复制操作的commit id，可以使用 git log 查看
    git checkout a7e8623bd12 drag.js
    整个版本的恢复：git reset --hard a7e8623bd12、git reset --hard HEAD^ / git reset --hard HEAD~3 回到前3个版本
    git reflog 会显示每一次操作行为
17、推送到远程仓库( guthub 上面 )：首先进入到某个要提交的文件下，然后使用命令：git push origin master(同步的分支)
    git remote 查看当前远程仓库的名字，默认是 "origin"
    git remote -v 查看远程的地址
18、在 github.com 网站上面分配项目修改的权限，找到 New collaborator ( 添加新的协作人员 )
19、同步更新代码：git fetch(拉取远程仓库的代码，但是并不自动合并) / git pull ( 会自动合并 )
               git fetch 后，在使用命令 git diff master origin/master 查看区别(冲突)，在使用 git merge origin/master 手动合并
               最后选择自己要的内容解决冲突后在提交一下 git commit -a -m "merge"，在提交到远端 git push origin master
20、 当自己没有权限修改开源代码的时候，就可以使用 Fork 开了新分支(镜像一个其他人开发的版本)
     在这个分支下改好，回到刚才项目的网页，点击 pull request，然后点击 New pull request，在点击 Create pull requset，就会发送一个请求给开源项目代码的人
21、在网页上回复人家，复制人家给你的消息，可以按 "R" 键，在进行回复 ( 也就是引用人家所说的话进行回复 )
22、查看分支 git branch / git branch new1 创建 new1 分支
23、切换分支 git checkout new1
    git checkout -b new2  ( -b 就是 branch 的简写 )
    git merge new1 合并分支
    git branch --merged 查看当前 master 分支下面所合并的分支
    git branch --no--merged  查看当前 master 没有合并的分支
    git branch -d new1 删除 new1 分支 ( 没有合并的分支，不允许直接进行删除操作 )
    git branch -D new2 强制删除没有合并过的分支
24、把分支提交到 github 上： git push origin new1
25、在 github 上的 releases 指的是发布的一个里程碑，可以参考 jQuery 的 github
    git tag v1.0 打标签 \ git tag 就是查看 \ git push origin v1.0 同步到 github 上面
26、创建博客页 https://pages.github.com/ 把仓库名字起程 Library.github.io

git branch -r 查看远程分支

cd 进入目录
cd.. 返回上一层
ls  查看目录结构
mkdir hello 创建 hello 文件夹
notepad hello.text 创建文件
"Tab" 键可以自动补全
git config --global alias.co checkout 在做 checkout 的时候可以使用 co 别名
git config --list 查看

http://git.oschina.net/progit
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000


fatal: Unable to create 'E:/资料/Library/.git/index.lock': File exists.

If no other git process is currently running, this probably means a
git process crashed in this repository earlier. Make sure no other git
process is running and remove the file manually to continue.

处理办法：到这个目录下把 index.lock 文件删除即可


http://www.jianshu.com/p/254b8316cb54


"glob": "^7.1.1"  npm install glob --save  node的glob模块允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件

http://www.hulufei.com/post/grunt-introduction

https://www.npmjs.com/package/glob

http://www.cnblogs.com/liulangmao/p/4552339.html

https://segmentfault.com/a/1190000004481856

http://imweb.io/topic/579e011a93d9938132cc8d90  webpack qq

require('path');
http://www.jianshu.com/p/fe41ee02efc8

// es6 模块化
http://es6.ruanyifeng.com/#docs/module

http://www.tuicool.com/articles/byIfemY

多页面开发
https://github.com/Mr-try/vue-multi-page-master

https://segmentfault.com/a/1190000006178770   webpack 入门

http://www.cnblogs.com/Joans/p/4462993.html  ndoejs process

http://cnodejs.org/topic/53fec0d97c1e2284788983d6  process.env.NODE_ENV;

http://www.thinksaas.cn/ask/question/21937/  node 的NODE_ENV有什么用？

webpack 配置
http://www.cnblogs.com/liuzhenwei/p/5519763.html
同时 css 或 less 的loader要加上参数?sourceMap，js的loader不用加？？？

/.css$/会匹配 xx.css文件，但是并不适用于xx.sass或者xx.css.zip文件
/.css/除了匹配xx.css也可以匹配xx.css.zip

http://www.jianshu.com/p/fe41ee02efc8 path 模块

https://segmentfault.com/a/1190000003970448  webpack

https://zhuanlan.zhihu.com/p/21346555   知乎的 webpack

http://www.jianshu.com/p/271f93b8c051  publicPath

https://segmentfault.com/a/1190000004060034 vue组件化开发初体验-示例vue-loader-example学习记录  vue-html-loader

http://www.tuicool.com/articles/vyUzuiy    vue-html-loader

http://www.imooc.com/article/4617  webpack

https://segmentfault.com/a/1190000002551952  DefinePlugin

http://www.reqianduan.com/2083.html

https://segmentfault.com/a/1190000004693862  webpack 使用心得 =>DefinePlugin

https://github.com/webpack/webpack/issues/292#issuecomment-44804366  DefinePlugin

http://blog.csdn.net/keliyxyz/article/details/51513114   HtmlWebpackPlugin

https://segmentfault.com/a/1190000007294861   HtmlWebpackPlugin

https://github.com/vuejs/awesome-vue   vue 资源

https://github.com/MeCKodo/vue-tap

版本号、目录结构、jquery 引用的问题


https://segmentfault.com/a/1190000006435886  vue2.0 问题

https://www.zhihu.com/question/41517840/answer/91591941  import css

https://segmentfault.com/q/1010000005363929  提取 import

http://www.cnblogs.com/souvenir/p/5012552.html  CommonsChunkPlugin

http://www.cnblogs.com/giveiris/p/5237080.html   webpack 性能优化  CommonsChunkPlugin

https://segmentfault.com/q/1010000002758528  CommonsChunkPlugin

var webpack = require("webpack")

在module.exports的最后加入

plugins: [
new webpack.optimize.CommonsChunkPlugin('common.js'),
new webpack.ProvidePlugin({
jQuery: "jquery",
$: "jquery"
})
]

然后一定要重新 run dev

在main.js 引入就ok了import $ from 'jquery'


 plugins: [
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', // 公共模块的名称
      chunks: chunks,  // chunks是需要提取的模块
      minChunks: chunks.length
    }),
    // 配置提取出的样式文件
    new ExtractTextPlugin('css/[name].css')
  ]

  https://github.com/kenberkeley/vue-demo/blob/master/best-practice.md  webpack 规范

  https://github.com/kenberkeley/vue-demo#features  demo

  http://cnodejs.org/topic/5750d752491b9c4f36910fec  vue 中的一些问题

  http://www.cnblogs.com/lvyongbo/p/5953464.html   webpack

  https://segmentfault.com/a/1190000003499526#articleHeader6  webpack 工程

  http://www.cnblogs.com/myqianlan/p/5626505.html  CommonsChunkPlugin 的问题

  http://blog.csdn.net/yiifaa/article/details/51916560  jquery 问题

  http://www.cnblogs.com/surfaces/p/5158582.html  1px 解决方案

webpack
  https://segmentfault.com/a/1190000005866410#articleHeader16

  https://segmentfault.com/a/1190000005742122

  http://www.open-open.com/lib/view/open1476240930270.html   vue2.0 案例

  Preferences -> Editor -> Inspections找到XML，把 Unbound XML namespace prefix的勾去掉

  <!--
      商品只显示 isSow(不同的渠道显示不同) = 1
      isSale=0 只是代表不能支付，点击详情还能看
  -->

  Vue2.0将不提供任何内置的过滤器，推荐使用单独的库，例如moment.js来格式化日期，accounting.js来格式化货币。
  对过滤器的决定性改变是对其语法的改变，使其与函数调用{{ date | formatDate('YY-MM-DD') }}内联。

  1.目前的项目几乎每个页面都用到了1.0的ready钩子函数，然而2.0已废弃不用，进而使用mounted替换，同时还新增了beforeMount、beforeUpdate、updated等，私以为越来越向react看齐了有木有。。

  beforeUpdate的作用是在页面初始渲染视图之后，一旦监测到data发生变化，在变化的数据重新渲染视图之前会触发beforeUpdated钩子函数，这也是重新渲染之前最后修改数据的机会

  update的作用则是在data发生变化渲染更新视图之后触发。

  所有图片都要都loading 加载，考虑 子组件嵌套 或者 sloat


https://github.com/vingojw/vue-vueRouter-webpack

框架 ui
http://blog.csdn.net/zgrkaka/article/details/53897202
http://mint-ui.github.io/#!/zh-cn
https://www.zhihu.com/question/38213423/answer/101195694




























