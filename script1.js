const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ordersystem');

//Get a reference to the database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//Create a schema that defines the structure for storing user data
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

//5.1
//aggregate show customer count by zipcode
Customer_model.aggregate([
    {
        $group: {
            _id: "$customer_zipcode",
            count: { $sum: 1 }
        }
    }
]).exec(function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

//5.2
//aggregate show customer count by zipcode where count > 1
Customer_model.aggregate([
    {
        $group: {
            _id: "$customer_zipcode",
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { $gt: 1 }
        }
    }
]).exec(function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

console.log('test')