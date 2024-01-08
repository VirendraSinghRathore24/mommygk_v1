const user2db = require("../models/UserDB8");

exports.getUsers8Month = async (req,res) => {
    try{
            const result = await user2db.find({});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result});

    }
    catch(err){
        console.log(err);
    }
}