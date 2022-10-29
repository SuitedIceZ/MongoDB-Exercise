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
// Customer_collection.aggregate(query51).exec(execute);

//5.2
//aggregate show customer count by zipcode where count > 1
query52 = require('./Exercise_query/ex5.2');
// Customer_collection.aggregate(query52).exec(execute);

//5.3
//aggregate show order of customer_id 10001 show order_id and order_date
query53 = require('./Exercise_query/ex5.3');
// Order_w_line_collection.aggregate(query53).exec(execute);

//5.4
//aggregate show product_id, product_name that has most total quantity in order_w_lines
query54 = require('./Exercise_query/ex5.4');
Order_w_line_collection.aggregate(query54).exec(execute);

//5.5

query55 = require('./Exercise_query/ex5.5');
//Order_w_line_collection.aggregate(query55).exec(execute);

//5.6
//
query56 = require('./Exercise_query/ex5.6');
//Order_w_line_collection.aggregate(query56).exec(execute);

//5.7
//
query57 = require('./Exercise_query/ex5.7');
//Order_w_line_collection.aggregate(query57).exec(execute);
