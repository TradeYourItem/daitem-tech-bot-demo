const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// ROUTE PRINCIPALE
app.get("/", (req, res) => {
  res.send("✅ Serveur IA Daitem opérationnel !");
});

// ROUTE DE TEST
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// AJOUTEZ ICI d'autres routes API au besoin

// LANCEMENT DU SERVEUR avec port dynamique pour Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
