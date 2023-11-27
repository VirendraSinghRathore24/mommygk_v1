const ipdb = require("../models/IPDB");

exports.getUsers = async (req,res) => {
    try{


            const result = await ipdb.find({});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result});

    }
    catch(err){
        console.log(err);
    }
}