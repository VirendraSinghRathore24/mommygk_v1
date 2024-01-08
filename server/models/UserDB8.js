const mongoose = require("mongoose");

const user8Schema = new mongoose.Schema({
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

const userdb8 = mongoose.model("userdb8", user8Schema);
module.exports = userdb8;