const { Article } = require('../../model/article');

module.exports = async(req,res)=>{
	let page = req.query.page || 1;
	let pagesize = 5;
	let count = await Article.countDocuments({});
	//总页数
	let total = Math.ceil(count/pagesize);
	let start=(page-1)*pagesize;
	let result = await Article.find().populate('author').limit(pagesize).skip(start);;
	
	res.render('admin/article',{
		result: result,
		page: page,
		total: total
	});
}