const express = require('express');

//创建博客展示页面路由
const admin = express.Router();

//创建二级路由 渲染登录页面
admin.get('/login',require('./admin/loginPage'))

//实现登录功能
admin.post('/login',require('./admin/login'))

//注册用户页面路由
admin.get('/register',require('./admin/registerPage'))

//创建用户路由
admin.post('/register',require('./admin/register'));

//创建用户修改页面路由
admin.get('/create',require('./admin/create'));

//创建用户修改路由
admin.post('/create',require('./admin/update'));

//用户删除路由
admin.get('/delete',require('./admin/delete'));

//后台用户列表页面
admin.get('/user',require('./admin/userPage'));

//文章列表页面路由
admin.get('/article',require('./admin/article'));

//博客删除路由
admin.get('/deleteblog',require('./admin/deleteblog'));

admin.get('/aindex',(req,res)=>{
	res.render('admin/admin');
})

//将路由对象作为模块成员进行导出
module.exports = admin;