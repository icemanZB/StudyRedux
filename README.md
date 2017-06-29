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
> 1. 安装 react `npm install react react-dom react-router redux redux-logger redux-thunk --save`


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