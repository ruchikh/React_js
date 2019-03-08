const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	item: "String",
	quantity: Number
})

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;