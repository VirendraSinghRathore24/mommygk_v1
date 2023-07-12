const foodblogdb = require("../models/FoodBlogDB");

exports.updateBlog = async (req,res) => {
    try{
        const {title, description} = req.body;

        console.log(title);
        console.log(description);

        await foodblogdb.findOneAndUpdate({ "sidebartitle" : title}, {"description" : description});

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