const mongoose = require('mongoose');

const articleTagSchema = new mongoose.Schema({
	id: Number,
	articleId: Number,
	tagId: Number
}, {collection: 'articleTag'});

mongoose.model('articleTag', articleTagSchema);

module.exports = mongoose.model('articleTag');
