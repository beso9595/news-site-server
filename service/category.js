const categoryModel = require('../model/category');

module.exports = {
	getAll: () => {
		return categoryModel.find();
	}
};