const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	id: {type: Number, required: true, unique: true},
	email: {type: String, required: true, unique: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	password: {type: String, required: true},
	createDate: {type: Date, required: true},
	updateDate: Date
}, {collection: 'user'});

mongoose.model('user', userSchema);

module.exports = mongoose.model('user');
