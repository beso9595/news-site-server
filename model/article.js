const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	id: Number,
	title: String,
	description: String,
	image: String,
	categoryId: Number,
	views: Number,
	createDate: Date
}, {collection: 'article'});

mongoose.model('article', articleSchema);

module.exports = mongoose.model('article');
