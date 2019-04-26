const articleTagModel = require('../model/articleTag');
const tag = require('../model/tag');

module.exports = {
	getTagsByArticleId: async params => {
		try {
			let data = await articleTagModel.find(params);
			if (data && data.length > 0) {
				let tagIds = data.map(r => ({
					id: r.tagId
				}));
				return await tag.find({$or: tagIds});
			}
			return [];
		} catch (ex) {
			throw new Error(ex.message);
		}
	}
};