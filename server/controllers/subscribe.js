
const subscribedb = require("../models/SubscribeDB");

exports.subscribe = async (req,res) => {
    try{
        const {email} = req.body;

        await subscribedb.create({"email" : email});
        
        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            success:true,
            message:"Subscribed successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}