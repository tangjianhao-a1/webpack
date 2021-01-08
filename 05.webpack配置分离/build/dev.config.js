const webpackMerge = require('./webpack-merge');  
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig, {
  devServer: {
   contentBase: './dist',  //服务文件夹
   inline: true,    //是否需要随时监听   
   port: 4567,

 } 

})
