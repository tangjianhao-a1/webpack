
//1.使用commonjs的模块化规范
const {add,nul} = require('./mathUtils.js')  
console.log(add(20,30));  
console.log(nul(20,30));  

//使用es6的模块化规范
import {name,age,height} from "./info"  

console.log(name);
console.log(age);  
console.log(height);