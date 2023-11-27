const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema({
    ipaddress:{
        type: String,
        required:true
    },
    count:{
        type: String,
        required:true
    }
})

const ipdb = mongoose.model("ipdb", ipSchema);
module.exports = ipdb;