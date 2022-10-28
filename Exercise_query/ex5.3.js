
//Export ex5.3
//Create aggregate pipeline to select order of customer_id 10001 show order_id and order_date
module.exports = [
    {
        $match: {
            customer_id: 10001
        }
    },
    {
        $project: {
            _id: 0,
            order_id: 1,
            order_date: 1
        }
    }
]


