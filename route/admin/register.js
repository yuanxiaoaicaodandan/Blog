
const {User} = require('../../model/user');

module.exports = async(req,res)=>{
	
	
	let user = await User.findOne({email: req.body.email})
	
	//如果用户已经存在
	if(user){
		res.render('admin/register',{msg: '该邮箱已经被使用,请重新注册'})
	}else{
		await User.create(req.body);
		res.redirect('/admin/login')
	}
}
