// 按需导入 jsonwebtoken，用于生成 token
const jwt = require('jsonwebtoken');

// 概念：
//      token 是一段字符串，主要记录了3部分信息，每段信息用逗号隔开
// 结构：
//      签名.负载.头部
// 如：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODQwOTEzMDB9.-ZcSyt0VE4r24UFNP2YgUzbeU3bf00q1uX6yS0gy7Go
// 注意：字符串由 jsonwebtoken 内部算法自动生成的。

// 头部  -  用于规定算法的，一般不用改算法

// 负载对象 - 可以写上公司的信息，每个公司都不一样
const obj = { foo: 'bar' };

// 签名秘钥 - 每个公司用自己秘钥
const key = 'shhhhh';

const token = jwt.sign(obj, key);

// 打印出生成的 token
console.log(token);
