var express = require("express");
var router = express.Router();

const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/* GET home page. */
router.post("/", async function (req, res, next) {
  try {
    const keyword = req.body.keyword;
    const blogs = await prisma.blog.findMany({
      where: {
        OR: [
          { title: { contains: keyword } },
          { content: { contains: keyword } },
        ],
      },
    });
    res.render("search", { blogs: blogs, keyword: keyword });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
