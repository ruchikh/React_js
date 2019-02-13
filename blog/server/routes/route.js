const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController')

router.get('/', (req, res)=>{
	res.render("index")
})

router.get('/article/:id', (req, res)=>{
	res.render("index")
})

router.post('/api/article', postsController.createPosts);
router.get('/api/article', postsController.getAllArticles);
router.get('/api/article/:id', postsController.getSingleBlog)
router.post('/api/article/:id/comment', postsController.postComment);
router.get('/api/article/:id/comment', postsController.allComment);
router.delete('/api/article/:id/comment', postsController.deleteComment);
router.PUT('/api/article/:id', postsController.updatePost)










module.exports = router;