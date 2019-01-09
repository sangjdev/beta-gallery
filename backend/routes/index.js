var express = require("express");
var userRouter = require("./user");
var postRouter = require("./post");
var router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);

module.exports = router;
