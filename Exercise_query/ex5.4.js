
//Export ex5.4
//Create aggregate pipeline to select product_id, product_name from product that has most total quantity in order_w_lines
module.exports = [
    {$unwind : "$order_lines"},
    {$group : {_id : "$order_lines.product_id",sum_ordered_quantity:{$sum:"$order_lines.ordered_quantity"}}},
    {$sort : {sum_ordered_quantity:-1}},
    {$limit : 1},
    {$project : {_id:0,product_id:"$_id",sum_ordered_quantity:1}},
    {$lookup : {from:"product",localField:"product_id",foreignField:"product_id",as:"product"}},
    {$unwind : "$product"},
    {$project : {_id:0,product_id:"$product.product_id",product_description:{$concat:["$product.product_color"," ","$product.product_name"]}}}
    ]

    