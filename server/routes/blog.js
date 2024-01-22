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
const {contactUser} = require("../controllers/contactUser");
const {insertUser7Month} = require("../controllers/insertUser7Month");
const {insertUser8Month} = require("../controllers/insertUser8Month");
const {insertUserSpices} = require("../controllers/insertUserSpices");
const {getUsers1} = require("../controllers/getUsers1");
const {getUsers} = require("../controllers/getUsers");
const {getUsers6} = require("../controllers/getUsers6");
const {getUsers7Month} = require("../controllers/getUsers7Month");
const {getUsers8Month} = require("../controllers/getUsers8Month");

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
router.post("/contactuser", contactUser);
router.post("/insertuser7month", insertUser7Month);
router.post("/insertuser8month", insertUser8Month);
router.post("/insertuserspices", insertUserSpices);
router.get("/users", getUsers);
router.get("/getusers", getUsers1);
router.get("/getusers6", getUsers6);
router.get("/getusers7month", getUsers7Month);
router.get("/getusers8month", getUsers8Month);

module.exports = router;