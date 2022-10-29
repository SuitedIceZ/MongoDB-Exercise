const mongoose = require('mongoose');
const db = require('./database_connector');

//Import all collection
Product_collection = require('./product_collection');
Customer_collection = require('./customer_collection');
Order_w_line_collection = require('./order_w_lines_collection');

//Cascading delete customer id = 10001
Customer_collection.deleteOne({customer_id: "10001"}).then((result) => {
    console.log(result);
    Order_w_line_collection.deleteMany({customer_id: "10001"}).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}).catch((error) => {
    console.log(error);
});

