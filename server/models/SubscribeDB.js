const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    }
})

const subscribedb = mongoose.model("subscribedb", subscribeSchema);
module.exports = subscribedb;