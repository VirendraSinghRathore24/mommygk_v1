const express = require("express");

const router = express.Router();

const {insertCard} = require("../controllers/insertCard");
const {insertBlog} = require("../controllers/insertBlog");
const {insertCategoryCard} = require("../controllers/insertCategoryCard");
const {getCards} = require("../controllers/getCards");
const {getBlogByTitle} = require("../controllers/getBlogByTitle");
const {getCardsByCategory} = require("../controllers/getCardsByCategory");
const {getAdminBlogs} = require("../controllers/getAdminBlogs");
const {updateBlog} = require("../controllers/updateBlog");
const {ip} = require("../controllers/ip");
const {getUsers} = require("../controllers/getUsers");

router.post("/insertcard", insertCard);
router.post("/insertblog", insertBlog);
router.post("/insertcategorycard", insertCategoryCard);
router.get("/cards", getCards);
router.get("/getblog", getBlogByTitle);
router.get("/getcardsbycategory", getCardsByCategory);
router.get("/admin/blogs", getAdminBlogs);
router.post("/admin/blogs/updateblog", updateBlog);
router.post("/ip", ip);
router.get("/users", getUsers);

module.exports = router;