const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
	id: Number,
	title: String,
	route: String,
	parentId: Number
}, {collection: 'menu'});

mongoose.model('menu', menuSchema);

module.exports = mongoose.model('menu');
