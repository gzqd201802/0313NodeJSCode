// 按需导入 express 
const express = require('express');
// 按需导入 cors 中间件
const cors = require('cors');
// 创建 express 服务器
const app = express();

// 监听端口
//   基地址：  http://127.0.0.1:3000
app.listen(3000, () => {
    console.log('服务器启动成功！');
});

// 如果是要给所有的请求设置跨源资源访问，用 app.use() 统一添加
// app.use(cors());

// 注册后端路由
// 使用cors跨源之后 会在响应报文中 出现这一行，这里是给单个请求设置跨源： Access-Control-Allow-Origin: *
// 如果单个路由配置，直接写到路由中逻辑中
app.get('/list', cors(), (request, response) => {
    response.send('英雄列表 /list 数据！');
});

app.get('/search', (request, response) => {
    response.send('单个英雄 /search');
});
