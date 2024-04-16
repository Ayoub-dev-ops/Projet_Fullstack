const User = require("../models/users/users");
var debug = require("debug")("backend:services:users");

createUser = async function createUser(email, password) {
  if (email == undefined || password == undefined) {
    return null;
  }
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return "email already there !"; // Email already exists in the database
  }
  try {
    console.log("creating user");
    var user = new User({ email: email, password: password });
    await user.save();
    console.log("user created");
    return user;
  } catch (error) {
    debug(error);
    return null;
  }
};

module.exports = {
  createUser,
};
