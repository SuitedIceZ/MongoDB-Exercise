
//Export ex5.8
//Create aggregate pipeline to
module.exports = [
    {$unwind : "$order_lines"},
    //{$group : {_id : '$customer_id',total_order:{$sum:1}}},
]