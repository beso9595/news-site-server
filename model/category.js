const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	id: Number,
	title: String
}, {collection: 'category'});

mongoose.model('category', categorySchema);

module.exports = mongoose.model('category');
