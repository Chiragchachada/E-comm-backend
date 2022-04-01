//create a model for cart items
const mongoose = require("mongoose")
const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number
},
    { collection: "cart" });

const cartItemModel = mongoose.model("cartItemSchema", cartItemSchema)
module.exports = cartItemModel