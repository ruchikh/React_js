const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postsSchema = new Schema({
	title: String,
	description: String,
	createdAt: { type: Date, default: Date.now }
});

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;