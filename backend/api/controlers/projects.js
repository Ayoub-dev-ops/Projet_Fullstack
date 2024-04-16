const projectServices = require("../../services/projects");
const debug = require("debug")("backend:controllers:projects");

// Fonction de gestion de la route /index
const index = (req, res) => {
  res.status(200).json("Project index");
};

// Fonction de gestion de la création d'un projet
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

const deleteProject = async (req, res) => {
  const { title } = req.body;

  debug("Début de la suppression d'un projet dans le contrôleur...");

  try {
    // Appel du service pour supprimer un projet
    const project = await projectServices.deleteProject(title);

    if (!project) {
      // En cas d'échec de la suppression du projet
      return res.status(400).send("Erreur lors de la suppression du projet");
    }

    // Envoi de la réponse avec le projet supprimé
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
  deleteProject, // Fonction pour la suppression d'un utilisateur
};
