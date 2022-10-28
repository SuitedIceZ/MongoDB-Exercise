const mongoose = require('mongoose');

//Create a schema that defines the structure for storing customer data
const customerSchema = new mongoose.Schema(
    {
        customer_id: String,
        customer_name: String,
        customer_ampur: String,
        customer_province: String,
        customer_zipcode: String,
    },
   // {   collection: "customer" }
);

const Customer_model = mongoose.model("Customer_model", customerSchema,"customer");

//Export
module.exports = Customer_model;