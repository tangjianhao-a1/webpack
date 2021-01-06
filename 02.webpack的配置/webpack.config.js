//配置入口和出口文件
const path = require('path')

module.exports = {
  /* 入口 */
  entry: './src/main.js',
  /* 出口 */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  
    publicPath: 'dist/'
  },
  /* 配置css打包 */
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只是负责将CSS文件进行加载  
        //style-loader负责将样式添加到DOM中  
        //使用多个loader时，是从右向左
        use: ['style-loader', 'css-loader']
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
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将字符图片编译成base64字符串形式  
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 10000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      }
    ]
  }

}
