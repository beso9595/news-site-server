const express = require('express');
const router = express.Router();
const tagService = require('../service/tag');
const articleTagService = require('../service/articleTag');

router.get('/', async (req, res) => {
	try {
		let tags = await tagService.getAll();
		res.status(200).send(tags);
	} catch (ex) {
		res.status(500).send(ex.message);
	}
});

router.get('/:articleId', async (req, res) => {
	let articleId = parseInt(req.params.articleId);
	if (articleId) {
		try {
			let tags = await articleTagService.getTagsByArticleId({articleId});
			res.status(200).send(tags);
		} catch (ex) {
			res.status(500).send(ex.message);
		}
	}
});

module.exports = router;
