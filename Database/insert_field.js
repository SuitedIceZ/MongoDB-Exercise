const mongoose = require('mongoose');
const db = require('./database_connector');

Product_collection = require('./product_collection');

//Add data to product collection
const product_data_8 = [
    {product_id: 8, product_name: "table",product_color:"green", product_price: "550.00"},
];

Product_collection.insertMany(product_data_8).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});