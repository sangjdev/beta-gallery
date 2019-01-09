var express = require("express");
var router = express.Router();

var obj = [{ title: "hello world" }];
/**
 * GET 포스트 리스트
 */
router.get("/", function(req, res, next) {
  res.json(obj);
});

/**
 * POST 포스트 작성
 */
router.post("/", function(req, res, next) {
  // 헤더, 쿼리스트링, 바디
  // api/post/3           req.num
  // api/post/num?=1      req.params.num
  // api/post      // title  //    req.body.title
  const { title } = req.body;
  obj.push({ title: title });
  res.json({ success: "1" });
});

/**
 * PUT 포스트 수정
 */

/**
 * DELETE 포스트 삭제
 */

module.exports = router;
