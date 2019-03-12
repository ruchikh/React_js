const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	item: {type:String, require:true},
	quantity: {type:String, require:true}
})

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;