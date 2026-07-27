const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.json({
    nombre: "Mayelin Lucía Quevedo",
    cancion_favorita: "Clancy - Twenty One Pilots"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});