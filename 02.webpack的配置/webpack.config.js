//配置入口和出口文件
const path = require('path')

module.exports = {
  entry: './src/main.js',  
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
}