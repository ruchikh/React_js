const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postsSchema = new mongoose.Schema({
	title: String,
	description: String,
	createdAt: { type: Date, default: Date.now },
	// comments: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Comment'
 //  }]
});

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;