//配置入口和出口文件
const path = require('path')

module.exports = {
  /* 入口 */
  entry: './src/main.js',
  /* 出口 */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  //打包文件名
    publicPath: 'dist/'  //url路径的相关设置
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
      //配置less文件
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
          //配置图片
      {
        test: /\.(png|jpg|gif)$/, 
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将字符图片编译成base64字符串形式  
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 10000,  //图片大小设定
              //新生成图片路径和命名
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
       //配置babel转换ES6变ES5语法
      {
        test: /\.js$/,
        //exclude:排除，  
        //include:包含，
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },  
  /* vue构建会产生runtime-only和runtime-compiler两个版本 
      runtime-only编译不了template需要如下配置*/  
   resolve: {
    //alias: 别名  
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  } 

}
