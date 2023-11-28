const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    ip:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    }
})

const userdb = mongoose.model("userdb", userSchema);
module.exports = userdb;