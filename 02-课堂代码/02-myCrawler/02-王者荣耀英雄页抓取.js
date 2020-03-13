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

            // 准备个空数组用于保存英雄数据
            const heroArr = [];
            // 遍历所有影响列表的 a 标签
            $('.herolist-content a').each((index,item)=>{
                const name = $(item).text().trim();
                const icon = $(item).find('img').attr('src');
                heroArr.push({
                    name,
                    icon: `http:${icon}`
                })
            });

            // 打印出来标题文本
            console.log(title);

            // 打印英雄列表
            console.log(heroArr);
            debugger;
            
        }
        // 完成任务
        done();
    }
});
 
// 爬虫要抓取的页面队列，如果传入数组，可以抓取多个页面
c.queue('https://pvp.qq.com/web201605/herolist.shtml');