const debug = require("debug")("backend:services:connection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Function to establish a connection
const connect = async (email, password) => {
  if (email === undefined || password === undefined) {
    return null;
  }

  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  // Get the default connection
  const connection = mongoose.connection;

  try {
    debug("Establishing connection...");
    await connection.connect();
    debug("Connection established successfully!");
    return "Connection successful";
  } catch (error) {
    debug("Error while establishing connection:", error);
    return null;
  }
};

const comparePassword = async (password, hashedPassword) => {
  if (password === undefined || hashedPassword === undefined) {
    return false;
  }

  try {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    return passwordMatch;
  } catch (error) {
    debug("Error while comparing passwords:", error);
    return false;
  }
};

module.exports = {
  connect,
  comparePassword,
};
