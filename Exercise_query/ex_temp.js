module.exports = [
    {
        $lookup: {
            from: 'order_w_lines',
            localField: 'product_id',
            foreignField: 'product_id',
            as: 'order_w_lines'
        }
    },
    {
        $unwind: '$order_w_lines'
    },
    {
        $group: {
            _id: {
                product_id: '$product_id',
                product_name: '$product_name'
            },
            total_quantity: {
                $sum: '$order_w_lines.quantity'
            }
        }
    },
    {
        $sort: {
            total_quantity: -1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
            _id: 0,
            product_id: '$_id.product_id',
            product_name: '$_id.product_name'
        }
    }
]