const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const template = require('art-template');
const dateFormat = require('dateformat');
//数据库连接
require('./model/connect');

//处理post请求参数
app.use(bodyParser.urlencoded({extended:false}));
//配置session
app.use(session({
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  secret: 'aF,.j)wBhq+E9n#aHHZ91Ba!VaoMfC', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 48 * 60 * 60 * 1000 }
}));
//告诉express框架模板所在的位置
app.set('views',path.join(__dirname,'views'));
//告诉express框架模板的默认后缀是什么
app.set('view engine','art');
//当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art',require('express-art-template'));
//向模板内部导入dateFormate变量
template.defaults.imports.dateFormat = dateFormat;

//开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));



//引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');

//拦截请求 判断用户登录状态
app.use('/',require('./middleware/loginGuard'));

//匹配一级请求路径
app.use('/home',home);
app.use('/admin',admin);







app.listen(80);
console.log('网站服务器启动成功，请访问localhost');