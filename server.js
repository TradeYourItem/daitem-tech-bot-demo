const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 10000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// Page d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur du Daitem Tech Bot !");
});

// ✅ Route test GPT-4
app.get("/api/test", (req, res) => {
  res.json({
    gpt4: true,
    status: "🟢 GPT-4 actif et serveur fonctionnel",
    timestamp: new Date().toISOString()
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
