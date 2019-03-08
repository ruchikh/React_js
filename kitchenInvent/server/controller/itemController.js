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

	editItem: (req, res) => {
		event_Id = req.params.id
		console.log(id)
		Item.findByIdAndUpdate(id, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	}

}