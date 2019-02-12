const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
	value: String,
	createdAt: { type: Date, default: Date.now },
	postId: {
    type: Schema.Types.ObjectId,
    ref: 'Posts'
  }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;