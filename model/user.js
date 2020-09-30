const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 20
	},
	email: {
		type: String,
		unique: true, //保证邮箱地址在插入数据库时不重复
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = mongoose.model('User',userSchema);


module.exports = {
	User: User
}