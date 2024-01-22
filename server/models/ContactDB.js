const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
})

const contactdb = mongoose.model("contactdb", contactSchema);
module.exports = contactdb;