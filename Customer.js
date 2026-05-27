const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    service: String,
    date: String
});

module.exports = mongoose.model("Customer", customerSchema);
