//const { isNullOrUndef } = require("chart.js/dist/helpers/helpers.core");
const ipdb = require("../models/IPDB");

exports.ip = async (req,res) => {
    try{
        const {ip} = req.body;
        //console.log("Viren");
        //console.log(ip);
        const ips = await ipdb.findOne({"ipaddress": ip});

        if(ips == null)
        {
            
            //await ipdb.create({"ipaddress":ip, "count" : "1"});
        }
        else
        {
            //console.log(ips.ipaddress);
            var count = parseInt(ips.count) + 1;
            //await ipdb.updateOne({"ipaddress":ip, "count": count.toString()});
        }

        
        //console.log(ips);
        
        //const result = await ipdb.create({"ipaddress":ip});

        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            success:true,
            message:"ip added successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}