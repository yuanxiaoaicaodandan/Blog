const { Article } = require('../../model/article');
const {User} = require('../../model/user');
const pagination = require('mongoose-sex-page');

module.exports = async(req,res)=>{
	//page指定当前页
	//size指定每页显示的数据条数
	//display 指定客户端要显示的页码数量
	//exec向数据库中发送 查询请求
	const username = req.session.username;
	let user = await User.findOne({username: username});
	const page = req.query.page;
	let articles = await pagination(Article).find({author: user._id}).page(page).size(2).display(3).populate('author').exec();
	let article = await Article.find().populate('author');

	
	// 渲染文章列表页面模板
	res.render('home/person', {
		articles: articles,
		article: article
	});
	//res.render('home/person');
}