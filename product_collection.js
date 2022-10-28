const mongoose = require('mongoose');

//Create a schema that defines the structure for storing product data
const productSchema = new mongoose.Schema(
    {
        product_id: String,
        product_name: String,
        product_color: String,
        product_price: Number,
    },
    //{   collection: "product" }
);

const Product_model = mongoose.model("Product_model", productSchema,"product");

//Export
module.exports = Product_model;
