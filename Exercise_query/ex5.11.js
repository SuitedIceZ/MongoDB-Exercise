
//Export ex5.11
//Create aggregate pipeline to find customer that not have order in order_w_lines
module.exports = [
    {$group : {_id : '$customer_id'}},
    {$addFields: {customer_id: { $toInt: "$_id" }}},
    {$group : {_id : null, all_customer_id_list:{$push: "$customer_id"}}},
    {$lookup : {from:"order_w_lines",localField:"all_customer_id_list",foreignField:"customer_id",as:"customer"}},
    {$unwind : "$customer"},
    {$group : {_id : "$customer.customer_id",all_customer_id_list:{$first: "$all_customer_id_list"}}},
    {$group : {_id : null, order_customer_id_list:{$push: "$_id"},all_customer_id_list:{$first: "$all_customer_id_list"}}},
    {$addFields: {not_order_customer_id_list: { $setDifference: [ "$all_customer_id_list", "$order_customer_id_list" ] }}},
    {$project : {_id:0,not_order_customer_id_list:1}},
    {$unwind : "$not_order_customer_id_list"},
    {$addFields: {not_order_customer_id_list: { $toString: "$not_order_customer_id_list" }}},
    {$lookup : {from:"customer",localField:"not_order_customer_id_list",foreignField:"customer_id",as:"customer"}},
    {$unwind : "$customer"},
    {$project : {_id:"$customer._id",customer_id:"$customer.customer_id",customer_name:"$customer.customer_name"}}
]