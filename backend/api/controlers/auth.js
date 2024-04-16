//Fonction de gestion de la route /index
const index = (req, res) => {
  res.status(200).json("Auth index");
};

//Export des fonctions du contrôleur pour les rendre disponibles à d'autres modules
module.exports = {
  index, //Fonction pour la route /index
};
