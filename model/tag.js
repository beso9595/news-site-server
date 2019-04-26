const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
	id: Number,
	name: String,
	views: Number
}, {collection: 'tag'});

mongoose.model('tag', tagSchema);

module.exports = mongoose.model('tag');
