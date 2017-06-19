### 命令行总结 <br>
> 1. `cls` 清屏 <br>
> 2. `d:` 直接进入 D 盘 <br>
> 3. `cd` 进入目录， p.s. `cd soft`
> 4. `..` 进入上级目录


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
> 3. 

### vscode 使用技巧 <br>
> 1. vscode 快捷键 [参考网址](http://www.cnblogs.com/bindong/p/6045957.html) <br>
> > * 侧边栏显/隐：wiindows 下 Ctrl+B / mac 下 ⌘ + B <br>
> > * 多行编辑(列编辑)：windows 下 Alt+Shift+鼠标左键，Ctrl+Alt+Down/Up / mac 下 ⇧（shift）+ ⌥（option）+ 鼠标左键

### mac 使用技巧 <br>
> 1. 特殊字符 ⌘（command）、⌥（option）、⇧（shift）、⇪（caps lock）、⌃（control）、↩（return）、⌅（enter）