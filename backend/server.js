const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

// Utilisez body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const ip_Address = process.env.IP_Address;

// Connection à la base de données MongoDB avec Mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données est OK !");
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données :", error);
  });

const routerAuth = require("./api/routes/auth");
app.use("/user", routerAuth); // Définissez les routes pour le module auth sur /user

// Créer le serveur HTTP avec http.createServer
const server = http.createServer(app);

server.listen(port, ip_Address, () => {
  console.log(`Votre application écoute sur le port ${port}`);
});
