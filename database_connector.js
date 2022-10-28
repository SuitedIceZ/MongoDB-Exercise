const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ordersystem');

//Get a reference to the database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//Export the model
module.exports = db;