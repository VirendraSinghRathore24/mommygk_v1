
const userdb = require("../models/UserDB");

exports.insertUser = async (req,res) => {
    try{
        const {ip, city, state, country} = req.body;
        const user = await userdb.findOne({"ip": ip});

        if(user === null || user === undefined )
        {
            await userdb.create({"ip":ip, "city" : city, "state" : state, "country" : country});
        }

        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            success:true,
            message:"user added successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}