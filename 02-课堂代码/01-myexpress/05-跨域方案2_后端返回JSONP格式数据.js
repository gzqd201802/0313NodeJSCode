// 按需导入 express 
const express = require('express');

// 创建 express 服务器
const app = express();

// 监听端口
app.listen(3000, () => {
    console.log('服务器启动成功！');
})


app.get('/list', (request, response) => {
    const heroArr = [
        {
            name:'李白',
            skill:'喝酒',
            icon:'xxx',
        },
        {
            name:'杜甫',
            skill:'作诗',
            icon:'ooo',
        }
    ];

    // 1. 返回 JSON 格式
    // response.send(heroArr);

    // 2. 返回 JSONP 格式
    response.send(
        `fn(${ JSON.stringify(heroArr) })`
    );

});

// 访问地址：
//      http://127.0.0.1:3000/list
// 最终 JSONP 接口由 script 标签的 src 发起请求。
// 小结：
//    JSONP 格式的数据，其实返回的就是一个 函数调用式，JSON 数据作为调用时候的实参。
