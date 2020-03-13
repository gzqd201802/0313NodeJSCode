// 按需导入 express 
const express = require('express');

// 导入抽离的对象
const heroRouter = require('./routers/heroRouter')

// 创建 express 服务器
const app = express();

// 监听端口
app.listen(3000, () => {
    console.log('服务器启动成功！');
})

// 注册后端路由
// 链式编程是 express() 内部 get post 封装的语法，内部返回调用的对象。
// 链式编程不是ES6的，也不是Node的。
app.get('/list', heroRouter.list)
    .post('/add', heroRouter.add)
    .get('/delete', heroRouter.delete)
    .post('/edit', heroRouter.edit)
    .get('/search', heroRouter.search)