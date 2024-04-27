
const subscribedb = require("../models/SubscribeDB");
var sendEmailMessage = require('./Email/sendEmailMessage');

exports.sendEmail = async (req,res) => {
    try{
        const {subject, message} = req.body;

        // get all subscribers list
        const data = await subscribedb.find({});

        const data1 = ['virendrasinghrathore24@gmail.com', "virendrasinghrathore025@gmail.com", 'virendrasinghrathore24@gmail.com'];  

        let unique = [...new Set(data)];
       
        
        unique.map((e) => {
            sendEmailMessage(e.email, subject, message);
            //sendEmailMessage(e, subject, message);
        })
        
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