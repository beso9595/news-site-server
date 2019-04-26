const express = require('express');
const router = express.Router();
const menuService = require('../service/menu');

router.get('/', async (req, res) => {
	try {
		let menuItems = await menuService.getAll();
		res.status(200).send(menuItems);
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

module.exports = router;
