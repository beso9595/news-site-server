const menuModel = require('../model/menu');

module.exports = {
	getAll: () => {
		return menuModel.find();
	}
};