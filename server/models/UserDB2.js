const mongoose = require("mongoose");

const user2Schema = new mongoose.Schema({
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
    },
    count:{
        type :Number,
        maxLength:20
    },
    date:{
        type: Date
    }
})

const userdb2 = mongoose.model("userdb2", user2Schema);
module.exports = userdb2;