const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController')


router.post('/api/article', postsController.createPosts)