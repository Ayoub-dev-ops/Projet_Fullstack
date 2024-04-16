var express = require("express");
var router = express.Router();
var userControler = require("../controlers/users");

/* GET my user info. */
router.get("/", userControler.index);
router.post("/addUser", userControler.addUser);

module.exports = router;
