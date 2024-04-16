var express = require("express");
var router = express.Router();
var userControler = require("../controlers/users");
const { authenticate } = require("../../middlewares/auth");

/* GET my user info. */
router.get("/", userControler.index);
router.post("/addUser", userControler.addUser);
router.get("/profile", authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = router;
