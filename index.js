
const express = require('express');
   const app = express();
   const port = process.env.PORT || 3000;

   // Middleware para parsear JSON
   app.use(express.json());

   // Endpoint /new
   app.get('/new', (req, res) => {
       res.json({ code: 'Ejemplo de código' });
   });

   // Endpoint /list
   app.get('/list', (req, res) => {
       res.json({ list: [] });
   });

   // Endpoint /update
   app.post('/update', (req, res) => {
       res.json({ success: true });
   });

   // Iniciar el servidor
   app.listen(port, () => {
       console.log(`Servidor corriendo en http://localhost:${port}`);
   });