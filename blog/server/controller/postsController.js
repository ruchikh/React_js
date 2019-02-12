const Posts = require('../models/posts');

module.exports = {
	createPosts: (req, res) => {
		const postDetails = req.body
		const newArticle = new Posts({
			title: postDetails.title,
			description: postDetails.description
		})

		newArticle.save((err, postDetails) => {
			if(err){
				res.send(err)
			}else {
				res.json({data: postDetails})
			}
		})
	}
}