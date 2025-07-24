// Import d'Express
const express = require('express');
const app = express();

// Utilisation du port Render OU 3000 en local
const PORT = process.env.PORT || 3000;

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bot Daitem actif ✅');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
