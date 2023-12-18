
const userdb2 = require("../models/UserDBSpices");

exports.insertUserSpices = async (req,res) => {
    try{
        const {ip, city, state, country} = req.body;
        const user = await userdb2.findOne({ip});

        if(user === null || user === undefined )
        {
            await userdb2.create({"ip":ip, "city" : city, "state" : state, "country" : country, "count" : 1, "date" : new Date(Date.now())});
        }
        else
        {
            var newVal = user.count + 1;
            await userdb2.findByIdAndUpdate(user._id, {count: newVal});
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