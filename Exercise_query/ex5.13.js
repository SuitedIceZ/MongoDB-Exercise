
//Export ex5.13

module.exports = [
    {$match : {order_id : 3}},
    {$unwind : "$order_lines"},
    {$group : {_id : "$order_lines.product_id",total_qty:{$sum:"$order_lines.ordered_quantity"}}},
    {$addFields: {_id: { $toString: "$_id" }}},
    {$lookup : {from:"product",localField:"_id",foreignField:"product_id",as:"product"}},
    {$unwind : "$product"},
    {$project : {_id:"$_id",total_qty:1,product_price:{$toInt : "$product.product_price"}}},
    {$group : {_id : null,total_paymet:{$sum:{$multiply:["$total_qty","$product_price"]}}}},
    {$project : {_id:0,total_paymet:1}}
]
