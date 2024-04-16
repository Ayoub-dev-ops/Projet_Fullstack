var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var authRouter = require("./auth");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

module.exports = router;
