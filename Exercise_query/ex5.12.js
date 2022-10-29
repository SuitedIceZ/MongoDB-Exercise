
//Export ex5.12
//Create aggregate pipeline to 

module.exports = [
    {$addFields: {order_date: { $toDate: "$order_date" }}},
    {$match : {order_date : {$gte : new Date("2020-01-01 00:00:00"), $lte : new Date("2020-01-15 23:00:00")} } }, 
    {$group : {_id : null , total_order:{$sum:1}}},
    {$project : {_id:0,total_order:1}}
]