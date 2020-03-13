// 按需导入 express 
const express = require('express');

// 创建 express 服务器
const app = express();

// 监听端口
app.listen(3000, () => {
    console.log('服务器启动成功！');
});

// 把路由的回调函数用一个对象管理，抽离封装
const heroRouter = {
    list: (request, response) => {
        response.send('英雄接口/list返回的内容');
    },
    add: (request, response) => {
        response.send('英雄接口/add返回的内容');
    },
    delete: (request, response) => {
        response.send('英雄接口/delete返回的内容');
    },
    edit: (request, response) => {
        response.send('英雄接口/edit返回的内容');
    },
    search: (request, response) => {
        response.send('英雄接口/search返回的内容');
    }
};

// 注册路由
app.get('/list', heroRouter.list)
    .post('/add', heroRouter.add)
    .get('/delete', heroRouter.delete)
    .post('/edit', heroRouter.edit)
    .get('/search', heroRouter.search);