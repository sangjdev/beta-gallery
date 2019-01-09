var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/**
 * Get users tags
 */
router.get("/tags", (req, res, next) => {
  res.send("tags");
});

module.exports = router;
