//配置入口和出口文件
const path = require('path')

module.exports = {
  /* 入口 */
  entry: './src/main.js',  
  /* 出口 */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  /* 配置css打包 */
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只是负责将CSS文件进行加载  
        //style-loader负责将样式添加到DOM中  
        //使用多个loader时，是从右向左
        use: ['style-loader',  'css-loader']
      },
      {
        test: /\.less$/,  
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader" // compiles Less to CSS
      }]
      }
    ]
  }

}
