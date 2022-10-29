
//Export ex5.4
//Create aggregate pipeline to select product_id, product_name from product that has most total quantity in order_w_lines
module.exports = [
    {$unwind:"$order_lines"},
    {$group:{_id: "$order_lines.product_id", count:{$sum:1}}},
    {$group:{_id: "$count", product_list:{$push: "$_id"}}},
    {$sort:{_id:-1}},
    {$limit:1},
    {$unwind:"$product_list"},
    {$project:{_id:0,product_id:"$product_list"}},
    {$addFields: {product_id: { $toString: "$product_id" }}},
    {$lookup:{from:"product",localField:"product_id",foreignField:"product_id",as:"product"}},
    {$unwind:"$product"},
    {$project:{_id:0,product_id:"$product.product_id",product_description:{$concat:["$product.product_color"," ","$product.product_name"]}}}
]

    