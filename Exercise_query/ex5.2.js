
//Export ex5.2
module.exports = [
    {
        $group: {
            _id: "$customer_zipcode",
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { $gt: 1 }
        }
    }
]