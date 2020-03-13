// 按需导入 crawler
const Crawler = require("crawler");

// 创建一个 Crawler 任务
const c = new Crawler({
    // 最大连接数
    maxConnections : 10,
    // 爬取后的回调函数
    callback : function (error, response, done) {
        // 失败
        if(error){
            console.log(error);
        }else{
            // 内部封装的包，可以让我们像 jq 那样选择元素
            const $ = response.$;
            // 中返回的页面源码中获取到 title 标签中的文本
            const title = $("title").text();
            // 打印出来标题文本
            console.log(title);
        }
        // 完成任务
        done();
    }
});
 
// 爬虫要抓取的页面队列，如果传入数组，可以抓取多个页面
c.queue('http://www.mi.com');