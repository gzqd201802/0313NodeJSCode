// 按需导入 crawler
const Crawler = require("crawler");
// 按需导入 mysql
const mysql = require('mysql');
// CV来的
const connection = mysql.createConnection({
    host: 'localhost',
    // 用户名 root
    user: 'root',
    // 密码 root
    password: 'root',
    // 数据库名称 hm43
    database: 'hm43'
});
// CV来的
connection.connect();


// 按需导入 fs 模块，用于处理文件读写
const fs = require('fs');
// 按需导入 path 模块，用于处理绝对路径
const path = require('path');

// 创建一个 Crawler 任务
const c = new Crawler({
    // 最大连接数
    maxConnections: 10,
    // 爬取后的回调函数
    callback: function (error, response, done) {
        // 失败
        if (error) {
            console.log(error);
        } else {
            // 内部封装的包，可以让我们像 jq 那样选择元素
            const $ = response.$;
            // 中返回的页面源码中获取到 title 标签中的文本
            // const pageTitle = $("title").text();
            // 打印出来标题文本
            // console.log(pageTitle);

            // 英雄名称
            const name = $('.cover-name').text();
            // 英雄别名
            const skill = $('.cover-title').text();
            // 英雄技能
            const icon = 'http:' + $('.skill-u1 li').eq(0).find('img').attr('src');

            // const obj = {
            //     name,
            //     skill,
            //     icon: `http:${icon}`
            // };

            // sql 语句往数据库写入数据
            //      写入到 hm43 数据库中的 hero 表中
            //      这个 hero 表需要提前创建好，并设置对应的字段
            const sqlStr = `insert into hero (name,skill,icon) values ('${name}','${skill}','${icon}');`;
            // CV来的，执行数据库操作
            connection.query( sqlStr , function (error, results) {
                if (error) {
                    console.log('数据库写入失败');
                }else{
                    console.log('数据库写入成功');
                }
             });
        }
        // 完成任务
        done();
    }
});

// 爬虫要抓取的页面队列，如果传入数组，可以抓取多个页面

try {
    // 希望从 ./data/hero.json 的详情页链接获取英雄详情
    const filePath = path.join(__dirname, './data/heroArr.json');
    // 读取文件内容，把 buffer 转成数组对象
    const heroArr = JSON.parse(fs.readFileSync(filePath));
    // console.log(heroArr);
    c.queue(heroArr.map(item => item.href));
} catch (error) {
    console.log('操作文件失败');
}