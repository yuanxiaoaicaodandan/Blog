const express = require('express');
//创建博客展示页面路由
const home = express.Router();
//创建二级路由
home.get('/index',require('./home/index'))

//创建博客内容路由
home.get('/content',require('./home/content'));

//创建发表博客页面展示路由
home.get('/publish',require('./home/publish'))

//实现发表博客功能
home.post('/publish',require('./home/add'));

//个人发表了的博客页面路由
home.get('/person',require('./home/person'));

//创建评论功能路由
home.post('/comment',require('./home/comment'));

//实现退出功能
home.get('/logout',(req,res)=>{
	req.session.destroy(function(){
		res.clearCookie('connect.sid');
		res.redirect('/admin/login');
	});
	
});

//将路由对象作为模块成员进行导出
module.exports = home;