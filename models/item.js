const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: String,
    description: String,
    condition: String,
    price: Number,
    image: String, // Array?
    location: String, // City, State or Zip - this could be pulled from the user OR allow for an alternate location to be input
    seller: String, // This will need to be pulled from the user's account upon posting
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;