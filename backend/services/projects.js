const Project = require("../models/projects/projects");
const debug = require("debug")("backend:services:projects");

// Fonction pour créer un projet
const createProject = async (
  title,
  thumbnail,
  description,
  period,
  technologyUsed
) => {
  if (title === undefined || thumbnail === undefined) {
    return null;
  }

  const existingProject = await Project.findOne({ title: title });

  if (existingProject) {
    return "Projet déjà existant !"; // Le projet existe déjà dans la base de données
  }

  try {
    debug("Création du projet...");
    const project = new Project({
      title: title,
      thumbnail: thumbnail,
      description: description,
      period: period,
      technologyUsed: technologyUsed,
    });
    await project.save();
    debug("projet créé avec succès !");
    return project;
  } catch (error) {
    debug("Erreur lors de la création du projet :", error);
    return null;
  }
};

const deleteProject = async (title) => {
  try {
    debug("Suppression du projet...");
    const project = await Project.findOneAndDelete({ title: title });
    if (project) {
      debug("Projet supprimé avec succès !");
      return true;
    } else {
      debug("Projet non trouvé !");
      return false;
    }
  } catch (error) {
    debug("Erreur lors de la suppression du projet :", error);
    return false;
  }
};

module.exports = {
  createProject,
  deleteProject,
};
