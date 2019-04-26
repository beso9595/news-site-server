const express = require('express');
const router = express.Router();
const articleService = require('../service/article');

router.get('/', async (req, res) => {
	try {
		let responseData = await articleService.search(req.query);
		res.status(200).send(responseData);
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

router.get('/top', async (req, res) => {
	try {
		let articles = await articleService.getTop();
		res.status(200).send(articles);
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

router.get('/:id', async (req, res) => {
	let id = parseInt(req.params.id);
	if (id) {
		try {
			let article = await articleService.getById({id});
			res.status(200).send(article);
		} catch (ex) {
			res.status(500).send(ex.message);
		}
	} else {
		res.status(500).send('ID not provided');
	}
});

module.exports = router;
