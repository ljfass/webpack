# webpack

### hash 计算与整个项目的构建相关；

### chunkhash 计算与同一 chunk 内容相关；

### contenthash 计算与文件内容本身相关。

# 版本
## npx webpack -v
## npm info wbepack

# webapck-cli
## 作用：可以在命令行运行webpack命令并且生效。

# output
## path publicPath
### path: 所有输出文件的目标路径：打包后文件在硬盘中的存储位置
### publicPath: 输出解析文件的目录，指定资源文件引用的目录，打包后浏览器访问服务时的url路径中通用的一部分
### 区别：
#### path是webpack所有文件的输出的路径，必须是绝对路径，比如：output输出的js,url-loader解析的图片，HtmlWebpackPlugin生成的html文件，都会存放在以path为基础的目录下.
#### publicPath 并不会对生成文件的路径造成影响，主要是对你的页面里面引入的资源的路径做对应的补全，常见的就是css文件里面引入的图片.
