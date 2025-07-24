// Import d'Express
const express = require('express');
const app = express();

// Utilisation du port Render OU 3000 en local
const PORT = process.env.PORT || 3000;

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Le bot Daitem est en ligne !');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
