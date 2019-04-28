const express = require('express');
const router = express.Router();
const userService = require('../service/user');

router.post('/', async (req, res) => {
	try {
		let exists = await userService.exists(req.body.email);
		if (exists) {
			res.status(409).end();
		} else {
			let record = await userService.add(req.body);
			res.status(200).send(record);
		}
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

module.exports = router;
