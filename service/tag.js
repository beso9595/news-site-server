const tagModel = require('../model/tag');

module.exports = {
	getAll: () => {
		return tagModel.find();
	}
};