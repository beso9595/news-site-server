const userModel = require('../model/user');
const config = require("../utils/config");
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

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
	},

	getByEmail: async (email) => {
		return await userModel.findOne({email});
	},

	comparePasswords(password, hashedPassword) {
		return password === cryptoJS.AES.decrypt(hashedPassword, config.passwordKey).toString(cryptoJS.enc.Utf8);
	},

	generateToken(user) {
		return jwt.sign(user, config.tokenKey, {expiresIn: '1h'});
	}
};

module.exports = services;