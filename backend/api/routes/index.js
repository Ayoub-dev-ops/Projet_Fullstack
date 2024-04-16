var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var projectsRouter = require("./projects");
var authRouter = require("./auth");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/projects", projectsRouter);

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

module.exports = router;
