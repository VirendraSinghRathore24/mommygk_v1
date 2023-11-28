const userdb = require("../models/UserDB");

exports.getUsers1 = async (req,res) => {
    try{
            const result = await userdb.find({});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result});

    }
    catch(err){
        console.log(err);
    }
}