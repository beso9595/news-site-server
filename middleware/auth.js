const jwt = require('jsonwebtoken');
const config = require('../utils/config');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		req.userData = jwt.verify(token, config.tokenKey);
		next();
	} catch (error) {
		return res.sendStatus(401);
	}
};