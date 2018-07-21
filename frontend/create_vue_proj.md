
1. 初始化一个 npm 项目

```
npm init ===> 生成 package.json
```

2. 配置 webpack & vue

```
npm install webpack vue vue-loader
```

> 根据提示，缺少什么包，安装什么包，eg： npm i css-loader vue-template-compiler

3. 新建一个 src/ 目录，放置源码

4. 新建一个 webpack.config.js ： 打包前端资源

4.1 配置合适的 loader: You may need an appropriate loader to handle this file type.

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,    # 由于 css 文件可以来自外部文件，也可以直接插入 html 文件
        use: [
          'style-loader', # url-loader 要写在 css-loader 之前，否则会报错
          'css-loader'    # 处理 css 文件，只是从 css 文件将内容读出来，最终是插入 html 还是写入文件，需要 style-loader
        ]
      },
      {
        test: /\.(jpg|gif|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',   # url-loader 依赖于 file-loader
            options: {
              limit: 1024,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
```

5. 在 package.json 中添加

```
"scripts": {
    # 在这里配置的 webpack 会执行项目中安装的 webpack ,在命令行执行该命令，调用全局webpack
    "build": "webpack --config webpack.config.js"
}
```

---

## webpack-dev-server & cross-env & html-webpack-plugin

- package.json

`cross-env NODE_ENV=production webpack --config webpack.config.js`

`cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js`

- webpack.config.js

`process.env.NODE_ENV == 'production'`

---

`npm install postcss-loader autoprefixer babel-loader babel-core`

- postcss: 后处理 css 文件，通过一系列组件优化 css 代码，如 autoprefixer
- autoprefixer: 需要添加浏览器前缀的 css 属性，如：-webkit-, -ms- 等等，自动添加

- babel:
  - presets:
  - plugins: transform-vue-jsx: 转化 vue 里的 jsx
  `npm install babel-preset-env babel-plugin-transform-vue-jsx`

---

# 分离打包

`npm i extract-text-webpack-plugin`
`npm i -D extract-text-webpack-plugin@next`
`mini-css-extract-plugin`

hash vs chunkhash

---

# Error

1. vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.

```
vue-loader，15的版本需要再添加plugin的配置

1. 把安装版本改为14
2. 在 webpack.config.js 中添加
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
```
