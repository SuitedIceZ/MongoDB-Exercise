const mongoose = require('mongoose');

//Create a schema that defines the structure for storing order data
const orderSchema = new mongoose.Schema(
    {
        //order_id as int
        order_id: Number,
        order_date: Date,
        customer_id: String,
        order_lines: [
            {
                product_id: String,
                quantity: Number,
            },
        ],
    },
    //{   collection: "order" }
);

const Order_model = mongoose.model("Order_model", orderSchema,"order_w_lines");

//Export
module.exports = Order_model;