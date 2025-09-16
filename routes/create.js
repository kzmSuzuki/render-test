var express = require("express");
var router = express.Router();

const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.post("/", async function (req, res, next) {
  try {
    await prisma.blog.create({
      data: {
        title: req.body.title,
        date: new Date(req.body.date),
        content: req.body.content,
      },
    });
    res.status(201).redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating student");
  }
});

module.exports = router;
