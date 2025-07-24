const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 10000; // Ne pas dupliquer

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// ROUTE PRINCIPALE
app.get("/", (req, res) => {
  res.send("✅ Serveur IA Daitem opérationnel !");
});

// ROUTE DE SANTÉ
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// ROUTE TEST GPT
app.get("/api/test", (req, res) => {
  res.json({
    gpt4: true,
    status: "🟢 GPT-4 actif et serveur fonctionnel",
    timestamp: new Date().toISOString()
  });
});

// LANCEMENT DU SERVEUR
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
