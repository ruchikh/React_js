const Item = require("../models/Item");


module.exports = {
	addItems: (req, res) => {
   const newItem = new Item({
   	...req.body,
   	isAvailable: true})
   newItem.save((err, item) => {
   	if(err) res.send(err)
   		res.json(item)
   })
	},

	getItems: (req, res) => {
		Item.find({}, (err, item) => {
			if(err) 
				{
					res.send(err)
				}else{
				res.json(item)
				}
		})
	},

	getSingleItems: (req, res) => {
		const id = req.params.item_id;
		console.log(id)
		Item.findById(id, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	},

	editItem: (req, res) => {
		const item_Id = req.params.item_id
		console.log(item_Id)
		Item.findByIdAndUpdate({_id:item_Id}, req.body, {new:true}, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	}

}