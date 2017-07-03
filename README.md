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
> > * 打开终端 ⌃（control）+ `
> > * ⌥（option） + ⇧（shift）+ F 格式化代码 (beautify)
> 2. vscode git 使用 <br>
> > * 配置 git，设置全局配置 <br>
```
git config --global user.name "icemanZB"
git config --global user.email "254784109@qq.com"
查看全局的邮箱或名字：git config --global user.email
```
> > * 之后就可以正常操作了，提交到暂存区，把暂存区放到版本库，添加注释，最后推送即可 <br>
> 4. 使用 eslint [参考网址](https://segmentfault.com/a/1190000009077086) <br>
> > * `npm install -g eslint` 全局安装 eslint 和 `npm install -g eslint-plugin-html` 支持类 html 文件（如 vue）的内联脚本检测，还需要安装 eslint-plugin-html 插件 <br>
> > * mac 中使用快捷方式 `⇧⌘P` 输入 `eslint` 即可创建 .eslintrc.json 配置文件 <br>
> > * 在 首选项中进行一些配置 <br>
```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
],
"eslint.options": {
    "plugins": ["html"]
}

 // 配置说明
 "no-alert": 0,//禁止使用alert confirm prompt
 "no-array-constructor": 2,//禁止使用数组构造器
 "no-bitwise": 0,//禁止使用按位运算符
 "no-caller": 1,//禁止使用arguments.caller或arguments.callee
 "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
 "no-class-assign": 2,//禁止给类赋值
 "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
 "no-console": 2,//禁止使用console
 "no-const-assign": 2,//禁止修改const声明的变量
 "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
 "no-continue": 0,//禁止使用continue
 "no-control-regex": 2,//禁止在正则表达式中使用控制字符
 "no-debugger": 2,//禁止使用debugger
 "no-delete-var": 2,//不能对var声明的变量使用delete操作符
 "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
 "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
 "no-dupe-args": 2,//函数参数不能重复
 "no-duplicate-case": 2,//switch中的case标签不能重复
 "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
 "no-empty": 2,//块语句中的内容不能为空
 "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
 "no-empty-label": 2,//禁止使用空label
 "no-eq-null": 2,//禁止对null使用==或!=运算符
 "no-eval": 1,//禁止使用eval
 "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
 "no-extend-native": 2,//禁止扩展native对象
 "no-extra-bind": 2,//禁止不必要的函数绑定
 "no-extra-boolean-cast": 2,//禁止不必要的bool转换
 "no-extra-parens": 2,//禁止非必要的括号
 "no-extra-semi": 2,//禁止多余的冒号
 "no-fallthrough": 1,//禁止switch穿透
 "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
 "no-func-assign": 2,//禁止重复的函数声明
 "no-implicit-coercion": 1,//禁止隐式转换
 "no-implied-eval": 2,//禁止使用隐式eval
 "no-inline-comments": 0,//禁止行内备注
 "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
 "no-invalid-regexp": 2,//禁止无效的正则表达式
 "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
 "no-irregular-whitespace": 2,//不能有不规则的空格
 "no-iterator": 2,//禁止使用__iterator__ 属性
 "no-label-var": 2,//label名不能与var声明的变量名相同
 "no-labels": 2,//禁止标签声明
 "no-lone-blocks": 2,//禁止不必要的嵌套块
 "no-lonely-if": 2,//禁止else语句内只有if语句
 "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
 "no-mixed-requires": [0, false],//声明时不能混用声明类型
 "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
 "linebreak-style": [0, "windows"],//换行风格
 "no-multi-spaces": 1,//不能用多余的空格
 "no-multi-str": 2,//字符串不能用\换行
 "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
 "no-native-reassign": 2,//不能重写native对象
 "no-negated-in-lhs": 2,//in 操作符的左边不能有!
 "no-nested-ternary": 0,//禁止使用嵌套的三目运算
 "no-new": 1,//禁止在使用new构造一个实例后不赋值
 "no-new-func": 1,//禁止使用new Function
 "no-new-object": 2,//禁止使用new Object()
 "no-new-require": 2,//禁止使用new require
 "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
 "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
 "no-octal": 2,//禁止使用八进制数字
 "no-octal-escape": 2,//禁止使用八进制转义序列
 "no-param-reassign": 2,//禁止给参数重新赋值
 "no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
 "no-plusplus": 0,//禁止使用++，--
 "no-process-env": 0,//禁止使用process.env
 "no-process-exit": 0,//禁止使用process.exit()
 "no-proto": 2,//禁止使用__proto__属性
 "no-redeclare": 2,//禁止重复声明变量
 "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
 "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
 "no-return-assign": 1,//return 语句中不能有赋值表达式
 "no-script-url": 0,//禁止使用javascript:void(0)
 "no-self-compare": 2,//不能比较自身
 "no-sequences": 0,//禁止使用逗号运算符
 "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
 "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
 "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
 "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
 "no-sync": 0,//nodejs 禁止同步方法
 "no-ternary": 0,//禁止使用三目运算符
 "no-trailing-spaces": 1,//一行结束后面不要有空格
 "no-this-before-super": 0,//在调用super()之前不能使用this或super
 "no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
 "no-undef": 1,//不能有未定义的变量
 "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
 "no-undefined": 2,//不能使用undefined
 "no-unexpected-multiline": 2,//避免多行表达式
 "no-underscore-dangle": 1,//标识符不能以_开头或结尾
 "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
 "no-unreachable": 2,//不能有无法执行的代码
 "no-unused-expressions": 2,//禁止无用的表达式
 "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
 "no-use-before-define": 2,//未定义前不能使用
 "no-useless-call": 2,//禁止不必要的call和apply
 "no-void": 2,//禁用void操作符
 "no-var": 0,//禁用var，用let和const代替
 "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
 "no-with": 2,//禁用with
 "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
 "arrow-parens": 0,//箭头函数用小括号括起来
 "arrow-spacing": 0,//=>的前/后括号
 "accessor-pairs": 0,//在对象中使用getter/setter
 "block-scoped-var": 0,//块语句中使用var
 "brace-style": [1, "1tbs"],//大括号风格
 "callback-return": 1,//避免多次调用回调什么的
 "camelcase": 2,//强制驼峰法命名
 "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
 "comma-spacing": 0,//逗号前后的空格
 "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
 "complexity": [0, 11],//循环复杂度
 "computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
 "consistent-return": 0,//return 后面是否允许省略
 "consistent-this": [2, "that"],//this别名
 "constructor-super": 0,//非派生类不能调用super，派生类必须调用super
 "curly": [2, "all"],//必须使用 if(){} 中的{}
 "default-case": 2,//switch语句最后必须有default
 "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
 "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
 "eol-last": 0,//文件以单一的换行符结束
 "eqeqeq": 2,//必须使用全等
 "func-names": 0,//函数表达式必须有名字
 "func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
 "generator-star-spacing": 0,//生成器函数*的前后空格
 "guard-for-in": 0,//for in循环要用if语句过滤
 "handle-callback-err": 0,//nodejs 处理错误
 "id-length": 0,//变量名长度
 "indent": [2, 4],//缩进风格
 "init-declarations": 0,//声明时必须赋初值
 "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
 "lines-around-comment": 0,//行前/行后备注
 "max-depth": [0, 4],//嵌套块深度
 "max-len": [0, 80, 4],//字符串最大长度
 "max-nested-callbacks": [0, 2],//回调嵌套深度
 "max-params": [0, 3],//函数最多只能有3个参数
 "max-statements": [0, 10],//函数内最多有几个声明
 "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
 "new-parens": 2,//new时必须加小括号
 "newline-after-var": 2,//变量声明后是否需要空一行
 "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
 "object-shorthand": 0,//强制对象字面量缩写语法
 "one-var": 1,//连续声明
 "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
 "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
 "padded-blocks": 0,//块语句内行首行尾是否要空行
 "prefer-const": 0,//首选const
 "prefer-spread": 0,//首选展开运算
 "prefer-reflect": 0,//首选Reflect的方法
 "quotes": [1, "single"],//引号类型 `` "" ''
 "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
 "radix": 2,//parseInt必须指定第二个参数
 "id-match": 0,//命名检测
 "require-yield": 0,//生成器函数必须有yield
 "semi": [2, "always"],//语句强制分号结尾
 "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
 "sort-vars": 0,//变量声明时排序
 "space-after-keywords": [0, "always"],//关键字后面是否要空一格
 "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
 "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
 "space-in-parens": [0, "never"],//小括号里面要不要有空格
 "space-infix-ops": 0,//中缀操作符周围要不要有空格
 "space-return-throw-case": 2,//return throw case后面要不要加空格
 "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
 "spaced-comment": 0,//注释风格要不要有空格什么的
 "strict": 2,//使用严格模式
 "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
 "valid-jsdoc": 0,//jsdoc规则
 "valid-typeof": 2,//必须使用合法的typeof的值
 "vars-on-top": 2,//var必须放在作用域顶部
 "wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
 "wrap-regex": 0,//正则表达式字面量用小括号包起来
 "yoda": [2, "never"]//禁止尤达条件
```



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