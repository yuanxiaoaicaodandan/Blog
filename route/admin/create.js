const {User} =require('../../model/user');

const guard = async(req,res,next)=>{
		
		const {id} = req.query;
		
		
		res.render('admin/createAdmin',{
			id: id
		});
		

}
module.exports = guard;