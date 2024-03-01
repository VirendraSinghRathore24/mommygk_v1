const subscribedb = require("../models/SubscribeDB");

exports.getSubscribers = async (req,res) => {
    try{
        const result = await subscribedb.find({});
        
        res.set('Access-Control-Allow-Origin', '*');
        res.json({data: result});
    }
    catch(err){
        console.log(err);
    }
}