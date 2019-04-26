const express = require('express');
const router = express.Router();
const categoryService = require('../service/category');

router.get('/', async (req, res) => {
	try {
		let categories = await categoryService.getAll();
		res.status(200).send(categories);
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

module.exports = router;
