// 按需导入 express 
const express = require('express');
// 按需导入 http-proxy-middleware，CV 来的
const { createProxyMiddleware } = require('http-proxy-middleware');

// 按需导入 cors 中间件，CV来的
const cors = require('cors');

// 创建 express 服务器
const app = express();

// 监听端口
//   基地址：  http://127.0.0.1:3000
app.listen(3000, () => {
    console.log('服务器启动成功！');
});

// CV来的，所有请求设置 cors 
app.use(cors());

// CV 来的，创建服务器代理
app.use('/', createProxyMiddleware({
    target: 'http://mall.360.cn/',
    changeOrigin: true
}));

// 360服务器：( 没有 cors )
//      http://mall.360.cn/h5/getPrimaryCategory
// 本地服务器：( 代理后添加了 cors )
//      http://127.0.0.1:3000/h5/getPrimaryCategory

// 服务器代理的原理：
//    1. 发送请求到我们自己的服务器
//    2. 由我们的服务器向 360 服务器发送请求(服务器请求涉及)
//    3. 自己的服务器接收到 360 服务器返回的数据，发送给客户端


