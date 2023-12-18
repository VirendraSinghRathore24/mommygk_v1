const mongoose = require("mongoose");

const userspicesSchema = new mongoose.Schema({
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

const userspices = mongoose.model("userspices", userspicesSchema);
module.exports = userspices;