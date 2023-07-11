const foodblogdb = require("../models/FoodBlogDB");

exports.insertBlog = async (req,res) => {
    try{
        const {sidebartitle, blogtitle, description} = req.body;

        await foodblogdb.findOneAndUpdate({"sidebartitle":sidebartitle, "blogtitle" : blogtitle}, {"description" : description});

        res.set('Access-Control-Allow-Origin', '*');
        res.json({
            success:true,
            message:"Food Blog uploaded successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}