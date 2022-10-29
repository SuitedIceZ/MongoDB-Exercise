
//Export ex5.7
//Create aggregate pipeline to
module.exports = [
    {$unwind : "$order_lines"},
    {$group : {_id : '$order_lines.product_id',total_quantity:{$sum:"$order_lines.ordered_quantity"}}},
    {$sort : {total_quantity:-1}},
    {$limit : 1},
    {$addFields: {product_id: { $toString: "$_id" }}},
    {$lookup : {from:"product",localField:"product_id",foreignField:"product_id",as:"product"}},
    {$unwind : "$product"},
    {$project : {_id:0,product_id:"$product.product_id",product_name:"$product.product_name"}}
]