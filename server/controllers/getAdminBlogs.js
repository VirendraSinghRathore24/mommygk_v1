const foodblogdb = require("../models/FoodBlogDB");

exports.getAdminBlogs = async (req,res) => {
    try{
       
        var id = Object.keys(req.query);
        blogTitle = req.query[id];

        if(blogTitle === undefined || !blogTitle)
        {
            const result = await foodblogdb.find({});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result});
        }
        else{

            const result1 = await foodblogdb.findOne({"sidebartitle":blogTitle});
            res.set('Access-Control-Allow-Origin', '*');
            res.json({data: result1});
        }
    }
    catch(err){
        console.log(err);
    }
}