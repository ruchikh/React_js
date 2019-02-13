const Posts = require('../models/Post');
const Comment = require('../models/Comment.js');

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
	},
	
	getAllArticles: (req,res) => {
		Posts.find({}, (err, articles) => {
			if(err){
				res.send(err)
			}else res.json({articles})
		})
	},

	getSingleBlog: (req, res) => {
		const id = req.params.id;
		Posts.findById({_id: id}, (err, data) => {
			if(err){
				res.send(err)
			}else res.json({data})
		})
	},

	postComment: (req, res) => {
		const commentDetails = req.body;
		const newComment = new Comment({
			value: commentDetails.value,
			postId: commentDetails.postId
		})
		newComment.save((err, data) => {
			if(err){
				res.send(err)
			}else res.json({data})
		})
	},

	allComment: (req, res) => {
		const id = req.params.id;
		Comment.find({postId:id}, (err, blog) => {
			if(err){
				res.send(err)
			}else res.send(blog)
		})
	},

	deleteComment: (req, res) => {
		const comId = req.body.id;
		const postId = req.params.id;
		Comment.deleteOne({_id:comId}, (err) => {
			if(err){
				res.send(err)
			}else{
				Comment.find({postId}, (err, comments) => {
					if(err){
						res.send(err)
					}else res.json(comments)
				})
			}
		})

	},

	updatePost: (req, res) => {
		const postId = req.params.id;
		Posts.findByIdAndUpdate({postId}, req.body {new: true}, (err) => {
			if(err){
				res.send(err)
			}else {
				Posts.findById({postId}, (err, post) => {
					if(err){
						res.send(err)
					}else res.json(post)
				})
			}
		})

	}


}