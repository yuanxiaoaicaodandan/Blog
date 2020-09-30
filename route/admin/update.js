const {User} =require('../../model/user');

module.exports = async(req,res)=>{
	const body = req.body;
	const id = req.query.id;
	
	await User.updateOne({_id:id},{
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
	res.send('修改成功');
}