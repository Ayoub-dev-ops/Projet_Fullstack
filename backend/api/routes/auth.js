var express = require("express");
var router = express.Router();
var authControler = require("../controlers/auth");

/* GET my user info. */
router.get("/", authControler.index);
router.post("/addUser", authControler.addUser);
//router.get("/login", authControler.login);

module.exports = router;
