// Users - ROUTES
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/signup", function(req, res) {
  res.render("users/auth");
});

module.exports = router;
