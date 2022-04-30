# Infinite Scroll Posts | Fetch, Async/Await, Post Css

## Webpack + Babel で　async/await データ取得の際に出るエラーの解消方法

```bash
Uncaught ReferenceError: regeneratorRuntime is not defined
```

### plugin-transform-runtime をインストール

```bash
$ npm install @babel/runtime
$ npm install --save-dev @babel/plugin-transform-runtime
```

### webpack.config.js　の設定を変更

```javascript

// ...
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
        ],
        plugins: ['@babel/plugin-transform-runtime'], // 追加
      },
    },
  ],
},

// ...

```