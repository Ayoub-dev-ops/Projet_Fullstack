var express = require("express");
var router = express.Router();
var projectControler = require("../controlers/projects");

/* GET my user info. */
router.get("/", projectControler.index);
router.post("/addProject", projectControler.addProject);

module.exports = router;
