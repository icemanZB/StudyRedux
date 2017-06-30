### 命令行总结 <br>
> 1. `cls` 清屏 <br>
> 2. `d:` 直接进入 D 盘 <br>
> 3. `cd` 进入目录， p.s. `cd soft` <br>
> 4. `..` 进入上级目录 <br>
> 5. `ls` 查看目录结构 <br>
> 6. mkdir hello 创建 hello 文件夹 <br>
> 7. notepad hello.text 创建文件 <br>
> 8. "Tab" 键可以自动补全 <br>


### webpack 总结 <br>  
> 1. 全局安装 webpack   `npm install webpack -g` <br>
> 2. 进入项目目录，安装此项目的 webpack `npm install webpack --save-dev` <br>
> 3. 查看 webpack 版本信息 `npm info webpack` <br>
> 4. 安装指定版本的 webpack `npm install webpack@1.14.x --save-dev` <br>


### 项目 <br>
> 1. 安装 react `npm install react react-dom react-router redux redux-logger redux-thunk --save` <br>
> 2. `npm install postcss-loader autoprefixer --save-dev` 通过 postcss 平台，Autoprefixer 可以同 Sass，Stylus 或 LESS 等预处理器共通使用。它适用于普通的CSS，而你无需关心要为哪些浏览器加前缀，只需全新关注于实现，并使用W3C最新的规范。 <br>
> 3. `npm install express --save-dev` 基于 Node.js 平台，快速、开放、极简的 web 开发框架。 <br>
> 4. `npm install webpack-merge webpack-dev-middleware webpack-hot-middleware --save-dev` <br>
> > * webpack-merge 提供了一个合并函数 <br>
> > * webpack-dev-middleware 就是一个运行于内存中的文件系统，也是 express 的中间件。[参考网址](https://github.com/webpack/webpack-dev-middleware/) <br>
> > * webpack-hot-middleware 热替换 <br>
> 5.  node-sass 安装不上，使用 淘宝的镜像 `npm install -g cnpm --registry=https://registry.npm.taobao.org` <br>
> > * `npm install sass --save-dev` 安装 sass <br>
> > * `cnpm install node-sass --save-dev` 它允许以令人难以置信的速度将.scss 文件本机编译为 css 并通过连接中间件自动编译 <br>
> > * `npm install sass-loader --save-dev` sass-loader 依赖 node-sass ，允许你写 require('./css/main.scss'); 加载样式 <br>
> 6. `npm install less less-loader --save-dev` 安装 less，按需引用 [参考网址](https://github.com/webpack-contrib/less-loader)，使用 css-loader 其转换为 JS 模块，并将 ExtractTextPlugin 解压缩到一个单独的文件中。 <br>
> 7. `npm install style-loader css-loader --save-dev` <br>
> > * css-loader 使能够使用类似 @import 和 url(...) 的方法实现 require()的功能，它对 CSS Modules 的支持最好 [参考网址](https://github.com/css-modules/webpack-demo) <br>
> > * style-loader 将所有的计算后的样式加入页面中 <br>
> 8. `npm install extract-text-webpack-plugin --save-dev` 把 css 从 js 文件中提取出来，放到一个单独的 css 文件中  [参考网址](https://github.com/webpack/extract-text-webpack-plugin) <br>
> 9. `npm install json-loader --save-dev` 允许使用 require('*.json'); <br>
> 10. `npm install shelljs --save-dev` shelljs 可以让我们在 node 环境的 js 中使用 shell <br>
> 11. `npm install http-proxy-middleware --save-dev` http-proxy-middleware   nodejs 代理，转发所有请求代理到真实的后端真实 API 地址。[参考网址] (https://www.npmjs.com/package/http-proxy-middleware) <br>
> 12. `npm install html-webpack-plugin --save-dev`  html-webpack-plugin 自动创建 html 文件。[参考网址](https://github.com/ampedandwired/html-webpack-plugin) <br>
> 13. `npm install clean-webpack-plugin --save-dev` clean-webpack-plugin 用于在building之前删除你以前build过的文件 <br>
> 14. `npm install ora --save-dev` ora 优雅的终端器  https://www.npmjs.com/package/ora
> 15. `npm install friendly-errors-webpack-plugin --save-dev`  友好的错误提示 <br>
> 16. `npm install opn --save-dev` opn  打开默认浏览器 <br>
> 17. `npm install transfer-webpack-plugin --save-dev` 高度复制静态文件 <br>
> 18. `npm install babel-core babel-loader babel-preset-stage-2 babel-preset-es2015 babel-preset-react babel-plugin-transform-runtime --save-dev` `npm install babel-runtime --save` <br>
> > * babel 其实是几个模块化的包，其核心功能位于称为 babel-core 的 npm 包中  [参考网址](https://github.com/brunoyang/blog/issues/20)。 babel-core 模块以及 babel-preset-es2015 插件仅仅完成了 es6 语法转 es5 语法， 而es6规范新增了很多类和API并没有被添加进来。例如： Promise、Set、Map 等新增对象，Object.assign、Object.entries等静态方法。[参考网址](http://www.tuicool.com/articles/JFj67v)<br>
> > * babel-preset-es2015 解析 es6 <br> 
> > * babel-preset-react 解析 .jsx <br>
> > * babel-preset-stage-2 es7 不同阶段语法提案的转码规则(共有4个阶段)，stage-2 覆盖 stage-3 的所有功能 [参考网址](http://www.cnblogs.com/chris-oil/p/5717544.html) <br>
> > * babel-plugin-transform-runtime 类似帮助函数 _defineProperty 可能会重复出现在一些模块里，导致编译后的代码体积变大。Babel 为了解决这个问题，提供了单独的包 babel-runtime 供编译模块复用工具函数。它依赖 babel-runtime [参考网址](https://www.npmjs.com/package/babel-plugin-transform-runtime) <br>
> 19. `npm install babel-plugin-import --save-dev`  按需加载 antd  [参考网址](https://www.npmjs.com/package/babel-plugin-import) <br>
> 20. `npm install antd --save` 安装 antd ui <br>
> 21. `npm install isomorphic-fetch es6-promise --save`
> > * isomorphic-fetch 处理 ajax 提交
> > * es6-promise es6 兼容处理
> 22. `npm install js-cookie --save`   js-cookie cookie 处理
> 23. `npm install nprogress --save`   进度条插件
   

   

### Tips <br>
> 1. 在 wiondws 系统下删除 node_modules <br>
> > * `npm install rimraf -g` <br>
> > * 进入要删除的项目目录，执行 `rimraf node_modules` <br>
> 2. 安装 npm-check npm 模块升级工具 `npm install -g npm-check` <br>
> > * [参考网址](http://www.tuicool.com/articles/YrUnMrv) <br>
> > * npm模块升级工具npm-check，提供命令行下的图形界面，可以手动选择升级哪些模块。 <br>
> > * 命令选项介绍 <br>
```
Usage
  npm-check <path> <options>

Path
  Where to check. Defaults to current directory. Use -g for checking global modules.

Options
  -u, --update          Interactive update.
  -g, --global          Look at global modules.
  -s, --skip-unused     Skip check for unused packages.
  -p, --production      Skip devDependencies.
  -E, --save-exact      Save exact version (x.y.z) instead of caret (^x.y.z) in package.json.
  --no-color            Force or disable color output.
  --no-emoji            Remove emoji support. No emoji in default in CI environments.
  --debug               Debug output. Throw in a gist when creating issues on github.

Examples
  $ npm-check           # See what can be updated, what isn't being used.
  $ npm-check ../foo    # Check another path.
  $ npm-check -gu       # Update globally installed modules by picking which ones to upgrade. 
```
> 3. npm list -g --depth=0 查看 npm 全局安装列表


### vscode 使用技巧 <br>
> 1. vscode 快捷键 [参考网址](http://www.cnblogs.com/bindong/p/6045957.html) <br>
> > * 侧边栏显/隐：wiindows 下 Ctrl+B / mac 下 ⌘ + B <br>
> > * 多行编辑(列编辑)：windows 下 Alt+Shift+鼠标左键，Ctrl+Alt+Down/Up / mac 下 ⇧（shift）+ ⌥（option）+ 鼠标左键 <br>
> > * 打开侧边预览：windows 下 Ctrl + K V / mac 下 ⌘ + K V <br>
> 2. vscode git 使用 <br>
> > * 配置 git，设置全局配置 <br>
```
git config --global user.name "icemanZB"
git config --global user.email "254784109@qq.com"
查看全局的邮箱或名字：git config --global user.email
```
> > * 之后就可以正常操作了，提交到暂存区，把暂存区放到版本库，添加注释，最后推送即可



### webstorm 使用技巧 <br>
> 1. 常用快捷键总结 <br>
> > *  F11：Toggle bookmark 切换标记 <br>
> > * Ctrl + Shift + F12：Toggle maximizing editor(切换最大化编辑器) <br>
> 2. Inspections 的一些配置 <br>
> > * 拼音检查 Editor -> Inspections -> Profile(选择 Default) -> typo(输入) -> 勾去掉 <br>
> > * 静态方法 Editor -> Inspections -> Profile(选择 Default) -> Method can be static(输入) -> 勾去掉 <br>
> > * Editor -> Inspections -> XML -> Unbound XML namespace prefix <br>
> 3. 去掉自动保存 <br>
> > * File -> Settings -> Appearance & Behavior -> System Settings 中的只留第一个勾 <br>
> > * 在 File -> Settings -> Editor -> General -> Editor Tabs 中把 Mark modified tabs width asterisk 打上勾 <br>
> > * Synchronize files on frame or editor tab activation ( 激活当前窗口时保存 ) <br>
> > * Save files on frame deactivation 切换到其他窗口的时候( 当前窗口没有被激活 ) 保存 <br>
> > * Use safe write ( save changes to a temporary file first ) 安全写入，只要能重命名成功就会覆盖掉源文件来达到安全自动保存的目的，所以这个安全会不停的保存源文件。关掉这个选项就只会在很少的情况下自动保存。 <br>
> 4. 配置 git，webstorm 中 Version Control -> GitHub -> Auth Type(选择 Password) -> 输入账号密码 <br>
```
git config --global user.name "icemanZB"
git config --global user.email "254784109@qq.com"
查看全局的邮箱或名字：git config --global user.email
```
> 5. CSS颜色显示在代码上面 <br>
> > * Editor -> General -> Appearance -> Show CSS color preview as background(打勾)，去掉 Show CSS color preview icon in gutter <br>
> 6. Code Style 把用到的语言统一设置 -> Tabs and Indents -> Use tab character(打勾) -> Smart tabs(打勾) -> 设置 Indent 为 4 <br>
> 7. 设置 js 对齐方式，Code Style -> JavaScript -> other -> Align object properties(选择 On colon) -> Align ‘var’ statements and assignments(选择 Align multiline ‘var’ statements) <br>
> 8. 设置一些其他的 Code Style <br>
> > * JavaScript -> Wrapping and Braces -> Simple methods in one line(打勾)、Comment at first column(去掉打勾)、ES6 import/export(Do not wrap) <br>
> > * HTML -> Wrap text(去掉打勾)、Wrap attributes ( Do not wrap ) <br>
> > * JSON -> Wrapping and Braces -> Arrays(Do not wrap) <br>
> 9. 添加 vue 模板，Editor -> File and Code Templates 添加 Vue Component <br>
```
<template>
        <div></div>
    </template>

    <script type="text/ecmascript-6">
        export default{
            data(){
                return {
                }
            },
            components:{
            },
            mounted(){
            }
        }
    </script>
    <!--
        这里很重要
        type="text/scss" 兼容 2017 版本
        rel="stylesheet/scss"  兼容 2016版本
        lang="scss" 兼容 vscode
     -->
    <style scoped type="text/scss" lang="scss" rel="stylesheet/scss"></style>
```
> 10. 项目编码设置：Editor -> File Encodings -> 全部设置为 UTF-8 <br>
> 11. 设置 React Live Templates <br>
> > * Editor -> Live Templates -> JavaScript 添加一个 Live Template <br>
> > *  Abbreviation:rcc、Description: create react class component <br>
> > * 点击 No applicable contexts yet. Define. 选择 JavaScript <br>
```
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
```


### nginx 配置 <br>
> 1. mac 安装 nginx，`Mac brew search nginx、brew install nginx`，安装完以后，可以在终端输出的信息里看到一些配置路径：`/usr/local/etc/nginx/nginx.conf`（配置文件路径），注意 windows 拷贝过来的空格和linux中的空格不同 <br>
> > * mac 下，在 conf 中第一行写入 user root owner; 才可以使用 <br>
> > * 配置好后，启动相关服务 sudo nginx <br>
> > * 重载配置文件：sudo nginx -s reload <br>
> > * 停止 nginx 服务器：sudo nginx -s stop <br>
```
 listen       8091;
    location / {
        #root html;
        root    /users/zhjb/Desktop/code/h5-cmb/dist;
        index  index.html index.htm;
        autoindex   on;
    }

    location /api {
        rewrite ^/api/(.*) / break;
        proxy_pass  http://172.30.11.10;
    }
```


### mac 使用技巧 <br>
> 1. 特殊字符 ⌘（command）、⌥（option）、⇧（shift）、⇪（caps lock）、⌃（control）、↩（return）、⌅（enter） <br>