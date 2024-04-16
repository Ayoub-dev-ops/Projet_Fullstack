var express = require("express");
var router = express.Router();
var authControler = require("../controlers/auth");

/* GET my user info. */
router.get("/", authControler.index);

module.exports = router;
