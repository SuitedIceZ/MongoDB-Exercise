module.exports = [
    {
        $group: {
            _id: "$customer_zipcode",
            count: { $sum: 1 }
        }
    }
]