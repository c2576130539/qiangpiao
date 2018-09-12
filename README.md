# 微信小程序微票
基于 Wafer2 快速开发 Demo  详细：https://github.com/tencentyun/wafer2-quickstart-nodejs

# 使用流程
熟悉了一下小程序开发流程，简易教程:https://developers.weixin.qq.com/miniprogram/dev/

将代码下载后，导入后打开，将server文件夹下的config.js 中 pass 改为自己小程序的AppId
将client文件夹中的config.js中的 host 修改成腾讯云解决方案分配的域名

<img src=http://thyrsi.com/t6/369/1536728773x-1404801497.png />

进入后台数据库，https://ipahesku.qcloud.la/phpmyadmin/
账号root，密码初始值为自己小程序的AppId

创建相应数据库，movie.sql,seat.sql,piao.seat
分别代表电影信息，座位信息，影票信息
<img src=http://thyrsi.com/t6/369/1536729414x-1404801473.png />

编译执行即可运行，有问题将第一个网址操作弄懂。

# 结果演示
<img src=http://thyrsi.com/t6/369/1536730038x-1404801497.gif />


