const express = require("express");
const { login } = require("../controlers/auth");

const router = express.Router();

router.post("/login", login);

module.exports = router;
