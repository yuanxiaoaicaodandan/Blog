const {User} = require('../../model/user');
module.exports = async(req,res)=>{
		// 接收请求参数
	const {email, password} = req.body;
	// 如果用户没有输入邮件地址
	// if (email.trim().length == 0 || password.trim().length == 0) return res.status(400).send('<h4>邮件地址或者密码错误</h4>');
	if (email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('admin/notfound', {msg: '邮件地址或者密码错误'});
	// 根据邮箱地址查询用户信息
	// 如果查询到了用户 user变量的值是对象类型 对象中存储的是用户信息
	// 如果没有查询到用户 user变量为空
	let user = await User.findOne({email});
	// 查询到了用户
	if (user) {
		if(password == user.password){
			req.session.username = user.username;	
			req.session.email = user.email;
			req.app.locals.userInfo=user;
			//express提供的重定向方法
			if(user.email =='2521101798@qq.com'){
				res.redirect('/admin/user');
			}else{
				res.redirect('/home/index');
			}
		}
		else{
			res.status(400).render('admin/notfound', {msg: '邮箱地址或者密码错误'})
		}
	}
	else {
			// 没有查询到用户
			res.status(400).render('admin/notfound', {msg: '邮箱地址或者密码错误'})
		}
	
}
