const userdb = require("../models/UserDBSpices");

exports.getUsers6 = async (req,res) => {
    try{
            const result = await userdb.find({});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result});

    }
    catch(err){
        console.log(err);
    }
}