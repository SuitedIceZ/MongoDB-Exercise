

module.exports = [
    {$unwind : "$order_lines"},
    {$group : {_id : '$customer_id',total_quantity:{$sum:"$order_lines.ordered_quantity"}}},
    {$sort : {total_quantity:-1}},
    {$limit : 1},
    {$addFields: {customer_id: { $toString: "$_id" }}},
    {$lookup : {from:"customer",localField:"customer_id",foreignField:"customer_id",as:"customer"}},
    {$unwind : "$customer"},
    {$project : {_id:0,customer_id:"$customer.customer_id",customer_name:"$customer.customer_name"}}
]
