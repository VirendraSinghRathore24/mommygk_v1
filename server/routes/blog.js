const express = require("express");

const router = express.Router();

const {insertCard} = require("../controllers/insertCard");
const {insertBlog} = require("../controllers/insertBlog");
const {insertCategoryCard} = require("../controllers/insertCategoryCard");
const {getCards} = require("../controllers/getCards");
const {getBlogByTitle} = require("../controllers/getBlogByTitle");
const {getCardsByCategory} = require("../controllers/getCardsByCategory");
const {updateBlog} = require("../controllers/updateBlog");

router.post("/insertcard", insertCard);
router.post("/insertblog", insertBlog);
router.post("/insertcategorycard", insertCategoryCard);
router.get("/cards", getCards);
router.get("/getblog", getBlogByTitle);
router.get("/getcardsbycategory", getCardsByCategory);
router.post("/updateblog", updateBlog);

module.exports = router;