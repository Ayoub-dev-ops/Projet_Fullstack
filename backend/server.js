const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

// Utilisez body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());

app.use(cors());

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

const routerUser = require("./api/routes/users");
const routerProject = require("./api/routes/projects");
const routerAuth = require("./api/routes/auth");
app.use("/user", routerUser); // Définissez les routes pour le module auth sur /user
app.use("/project", routerProject); // Définissez les routes pour le module project sur /project
app.use("/auth", routerAuth); // Définissez les routes pour le module auth sur /auth

// Créer le serveur HTTP avec http.createServer
const server = http.createServer(app);

server.listen(port, ip_Address, () => {
  console.log(`Votre application écoute sur le port ${port}`);
});
