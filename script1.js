const mongoose = require('mongoose');
const db = require('./Database/database_connector');

Customer_collection = require('./Database/customer_collection');
Order_w_line_collection = require('./Database/order_w_lines_collection');
Product_collection = require('./Database/product_collection');

//Import execute template
const execute = require('./Utils/execute');

//5.1
//aggregate show customer count by zipcode
query51 = require('./Exercise_query/ex5.1');
Customer_collection.aggregate(query51).exec(execute);

//5.2
//aggregate show customer count by zipcode where count > 1
query52 = require('./Exercise_query/ex5.2');
Customer_collection.aggregate(query52).exec(execute);

//5.3
//aggregate  
console.log('test')