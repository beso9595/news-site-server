const express = require('express');
const router = express.Router();
const userService = require('../service/user');

router.post('/', async (req, res) => {
	try {
		let exists = await userService.exists(req.body.email);
		if (exists) {
			res.sendStatus(409);
		} else {
			let record = await userService.add(req.body);
			res.status(200).send(record);
		}
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

router.post('/login', async (req, res) => {
	try {
		let user = await userService.getByEmail(req.body.email);
		if (!user) {
			return res.sendStatus(401);
		}
		if (!userService.comparePasswords(req.body.password, user.password)) {
			return res.sendStatus(401);
		}
		const token = userService.generateToken({
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName
		});
		res.status(200).send(token);
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

module.exports = router;
