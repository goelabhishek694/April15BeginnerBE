const mongoose = require("mongoose");
//creating a product schema -> blueprint 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isInStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        default: "Miscellaneous",
    }
}, {timestamps: true});

//a model is a wrapper for the schema , it is used to query on db 
const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;