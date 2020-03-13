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
// 路由其实在后端开发的时候万网会有数十个设置上百个，按照某个功能的增删改查来分类管理、
// 如：英雄管理做一套，用户登录修改是一套
//      英雄管理路由用：hero/v1/list  hero/v1/add
//      用户管理路由用：user/v1/list  user/v1/add  区分开

// 按模块管理 -- 英雄模块
// 1.创建一个用于管理英雄接口的路由
// 基地址：
//   http:127.0.0.1:3000
// 功能模块路由
//   /hero/v1
// 客户端访问的完整地址就是：
//    http://127.0.0.1:3000/hero/v1/list

// 注册后端路由
const hero = express.Router();
// app.use() 启用路由
app.use('/hero/v1', hero);

// 由于前面的变成了 hero 新的路由地址，相当于是给hero注册路由
// 所以完整地址是：http://127.0.0.1:3000/hero/v1/list
hero.get('/list', heroRouter.list)
    .post('/add', heroRouter.add)
    .get('/delete', heroRouter.delete)
    .post('/edit', heroRouter.edit)
    .get('/search', heroRouter.search)