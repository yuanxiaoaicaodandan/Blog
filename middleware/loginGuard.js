const guard = (req,res,next)=>{
	if(req.url != '/admin/login'&&req.url != '/admin/register'&&!req.session.username){
		res.redirect('/admin/login');
	}else{
		next();
	}
}
module.exports = guard;