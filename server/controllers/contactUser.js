
const contactdb = require("../models/ContactDB");

exports.contactUser = async (req,res) => {
    try{
        const {name, email, message} = req.body;

        await contactdb.create({"fullname" : name, "email" : email, "message" : message});
        
        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            success:true,
            message:"message added successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}