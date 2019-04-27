const articleModel = require('../model/article');
const config = require("../utils/config");

module.exports = {
	search: async (q) => {
		let query = {};
		let page = q.page ? parseInt(q.page) : 1;
		let search;
		let category = parseInt(q.category);
		if (category && !search) {
			query.categoryId = category;
		}
		if (Object.keys(q).length > 0) {
			if (q.search) {
				search = q.search;
				const s = {'$regex': '(.)*' + search + '(.)*', '$options': 'i'};
				query.$or = [];
				let ob;
				[
					'title',
					'description'
				].forEach(item => {
					ob = {};
					ob[item] = s;
					query.$or.push(ob);
				});
			}
		}
		//
		let data = await articleModel
			.find(query)
			.skip((page - 1) * config.articlePerPage)
			.limit(config.articlePerPage)
			.sort({'createDate': -1});
		let total = await articleModel.countDocuments(query);
		return {
			pages: Math.ceil(total / config.articlePerPage),
			articles: data
		};
	},

	getById: params => {
		return articleModel.findOne(params);
	},

	getTop: () => {
		return articleModel.find().sort({'views': -1}).limit(config.topNewLimit);
	}
};