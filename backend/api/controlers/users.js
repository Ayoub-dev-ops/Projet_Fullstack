const userServices = require("../../services/users");
const debug = require("debug")("backend:controllers:users");

// Fonction de gestion de la route /index
const index = (req, res) => {
  res.status(200).json("User index");
};

// Fonction de gestion de la création d'un utilisateur
const addUser = async (req, res) => {
  const { email, password } = req.body;

  debug("Début de la création d'un utilisateur dans le contrôleur...");

  try {
    // Appel du service pour créer un nouvel utilisateur
    const user = await userServices.createUser(email, password);

    if (!user) {
      // En cas d'échec de la création de l'utilisateur
      return res
        .status(400)
        .send("Erreur lors de la création de l'utilisateur");
    }

    // Envoi de la réponse avec l'utilisateur créé
    return res.status(200).json(user);
  } catch (error) {
    // Gestion des erreurs
    debug(error);
    return res.status(400).send(error.message);
  }
};

module.exports = {
  index, // Fonction pour la route /index
  addUser, // Fonction pour la création d'un utilisateur
};
