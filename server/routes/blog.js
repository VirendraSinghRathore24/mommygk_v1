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
const {insertUser} = require("../controllers/insertUser");
const {insertUser7Month} = require("../controllers/insertUser7Month");
const {getUsers1} = require("../controllers/getUsers1");
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
router.post("/insertuser", insertUser);
router.post("/insertuser7month", insertUser7Month);
router.get("/users", getUsers);
router.get("/getusers", getUsers1);

module.exports = router;