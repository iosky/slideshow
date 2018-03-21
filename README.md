程序还是需要自己编码，记得牢。在此之前，学习了webpack的一些基本概念，以及按照官网的入门指南编写过webpack的配置文件。但是还没实际运用webpack到自己日常的项目中，因此这一次使用webpack来重构自己编写过的轮播图项目。

在js方面，我决定使用最近一直在学的es6来编写。

## 目的

主要是为了熟悉webpack的工作流程，因此我并没有将轮播图的所有功能编写，只选择了编写无限循环的功能，其他的，比如点击图标进行移动，点击前进后退按钮移动，鼠标移入，自动循环停止，鼠标移出，自动循环开启等功能都未编写。不过之前编写的轮播图已经实现过上述功能。

## webpack

### target

设置webpack工作的领域，对于编写web端应用的我来说，当然是填写 "web"咯

### entry

这是webpack的入口文件，webpack就是通过入口文件去解析项目的依赖关系。其中有很多配置，因此使用对象的语法来编写，例如 
```js
{ app： path.resolve(__dirname, './src/index.js')
```
也就是以相对目录下src文件夹下的index.js文件为入口文件，其中的path是node下的一个模块，__dirname编写项目的路径。因此上述语句表示的是一个绝对路径。

### output

定义webpack的输出文件。但webpack构建我们的项目，会将其中的文件打包，输入为我们自定义的文件。
```js
output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:5].js'
  }
```
[name]表示的是entry中的app，如果在entry中定义为hello，那么将是hello。[hash:5]表示hash值取五位。

### devServer
webpack的开发服务，可以使用此配置来自定义本地服务器。 port为端口号，host是域名，也可以是127.0.0.1之类的，overlay表示遇到错误的时候，开启遮罩和模态框，open表示在构建项目后，自动开启浏览器查看
```js
devServer: {
    port: 3000,
    host: 'localhost',
    overlay: {
      error: true
    },
    open: true
  }
```

### plugins

webpack可以使用插件来丰富我们的编码。这这个小项目中，我使用了cleanWebpackPlugin和HTMLWebpackPlugin。这个插件分别是清除指定目录下的多余文件和HTML生成

#### cleanWebpackPlugin

```js
new cleanWebpackPlugin(['./dist'])
```

传入一个数组，指定需要管理的目录

#### HTMLWebpackPlugin

```js
new HTMLWebpackPlugin({
      title: 'sliderShow',
      template: 'index.html'
    })
```
可以传入对象来配置此插件，而我就是使用项目目录的index.html文件来作为生成文件的模板，并且设置title为slidShow。
