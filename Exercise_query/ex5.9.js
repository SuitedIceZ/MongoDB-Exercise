
//Export ex5.9
//Create aggregate pipeline to show unique customer_id and customer_name that have order from 2020-01-10 to 2020-01-15
module.exports = [
    {$addFields: {order_date: { $toDate: "$order_date" }}},
    {$match : {order_date : {$gte : new Date("2020-01-10 00:00:00"),$lte : new Date("2020-01-15 23:00:00")}}},
    {$group : {_id : '$customer_id'}},
    {$addFields: {_id: { $toString: "$_id" }}},
    {$lookup : {from:"customer",localField:"_id",foreignField:"customer_id",as:"customer"}},
    {$unwind : "$customer"},
    {$project : {_id:"$customer._id",customer_id:"$customer.customer_id",customer_name:"$customer.customer_name"}}
]
