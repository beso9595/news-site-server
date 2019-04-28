const userModel = require('../model/user');
const config = require("../utils/config");
const cryptoJS = require('crypto-js');

let services = {
	add: async user => {
		user.password = cryptoJS.AES.encrypt(user.password, config.passwordKey).toString();
		user.createDate = new Date();
		let id = await services.getLastId();
		user.id = id + 1;
		return await new userModel(user).save();
	},

	exists: async email => {
		let userRecord = await userModel.findOne({email});
		return !!userRecord;
	},

	getLastId: async () => {
		let record = await userModel.find().sort('-id').limit(1);
		return record[0] ? record[0].id : 0;
	}
};

module.exports = services;