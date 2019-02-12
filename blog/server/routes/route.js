const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController')

router.get('/', (req, res)=>{
	res.render("index")
})

router.post('/api/article', postsController.createPosts)



module.exports = router;