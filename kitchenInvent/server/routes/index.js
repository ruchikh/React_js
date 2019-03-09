const express = require('express');
const router = express.Router()
const itemController = require('../controller/itemController')




router.post('/api/items', itemController.addItems);
router.get('/api/items', itemController.getItems);
router.get('/api/items/:item_id', itemController.getSingleItems);
router.put('/api/item/:item_id/edit', itemController.editItem)

router.get('*', (err, res)=>{
  res.render('index');
})
module.exports = router;