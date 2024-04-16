const projectServices = require("../services/projects");
const debug = require("debug")("backend:controllers:auth");

// Fonction de gestion de la route /index
const index = (req, res) => {
  res.status(200).json("Auth index");
};

// Fonction de gestion de la création d'un utilisateur
const addProject = async (req, res) => {
  const { title, description, period, technologyUsed, thumbnail } = req.body;

  debug("Début de la création d'un projet dans le contrôleur...");

  try {
    // Appel du service pour créer un nouveau projet
    const project = await projectServices.createProject(
      title,
      description,
      period,
      technologyUsed,
      thumbnail
    );

    if (!project) {
      // En cas d'échec de la création du projet
      return res.status(400).send("Erreur lors de la création du projet");
    }

    // Envoi de la réponse avec le projet créé
    return res.status(200).json(project);
  } catch (error) {
    // Gestion des erreurs
    debug(error);
    return res.status(400).send(error.message);
  }
};

module.exports = {
  index, // Fonction pour la route /index
  addProject, // Fonction pour la création d'un utilisateur
};
