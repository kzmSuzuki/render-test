var express = require("express");
var router = express.Router();

const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const blogs = await prisma.blog.findMany();
    res.render("index", { blogs: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
