const userServices = require("../../services/users");
const projectServices = require("../../services/projects");

// Fonction de gestion de la route /index
const index = (req, res) => {
  res.status(200).json("Auth index");
};

// Fonction de gestion de la création d'un utilisateur
const addUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("Début de la création d'un utilisateur dans le contrôleur...");

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
    return res.status(400).send(error.message);
  }
};

const addProject = async (req, res) => {
  const { title, description, period, technologyUsed, thumbnail } = req.body;

  console.log("Début de la création d'un projet dans le contrôleur...");

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
    return res.status(400).send(error.message);
  }
};

// Export des fonctions du contrôleur pour les rendre disponibles à d'autres modules
module.exports = {
  index, // Fonction pour la route /index
  addUser, // Fonction pour la création d'un utilisateur
  addProject, // Fonction pour la création d'un projet
};
