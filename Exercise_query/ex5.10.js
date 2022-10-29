
//Export ex5.10
//
module.exports = [
    {$match : {product_color : {$regex : "White"}}},
    {$project : {_id:1,product_id:1,product_name:1,product_color:1}},
]