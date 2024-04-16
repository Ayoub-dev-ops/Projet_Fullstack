const User = require("../models/users/users");
const debug = require("debug")("backend:services:users");

// Fonction pour créer un utilisateur
const createUser = async (email, password) => {
  if (email === undefined || password === undefined) {
    return null;
  }

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return "Email déjà utilisé !"; // L'email existe déjà dans la base de données
  }

  try {
    debug("Création de l'utilisateur...");
    const user = new User({ email: email, password: password });
    await user.save();
    debug("Utilisateur créé avec succès !");
    return user;
  } catch (error) {
    debug("Erreur lors de la création de l'utilisateur :", error);
    return null;
  }
};

module.exports = {
  createUser,
};
