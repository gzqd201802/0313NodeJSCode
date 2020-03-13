// 把路由对应的回调函数抽出来用一个对象管理
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

// NodeJS 中，每个文件就是独立作用域的：

// 浏览器写法： 
//   独立作用域: (function(){  })()
//   暴露对象：  window.xx = xx;

// Node写法：
//   独立作用域: 自带的，直接书写即可
//   暴露对象：  module.exports = xx;

// NodeJS 把对象暴露出去
module.exports = heroRouter;

