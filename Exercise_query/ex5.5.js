
//Export ex5.5
//Create aggregate pipeline to 
module.exports = [
    {$group : {_id : '$customer_id',count_order:{$sum:1}}},
    {$sort : {count_order:-1}},
    {$addFields: {customer_id: { $toString: "$_id" }}},
    {$lookup : {from:"customer",localField:"customer_id",foreignField:"customer_id",as:"customer"}},
    {$unwind : "$customer"},
    {$project : {_id:"$customer._id",customer_id:"$customer.customer_id",customer_name:"$customer.customer_name",count_order:1}}
]