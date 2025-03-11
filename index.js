
const express = require('express');
   const app = express();
   const port = process.env.PORT || 1000;

setInterval(() => {
  fetch('https://mininode.onrender.com/all')
    .then(response => console.log('ping to me'))
    .catch(error => console.error('ping failed', error));
}, 50000); // Cada 50segundos


   // Middleware para parsear JSON
   app.use(express.json());

   // Endpoint /new
   app.get('/new', (req, res) => {
       res.json({ code: 'actualizado' });
   });

   // Endpoint /list
   app.get('/all', (req, res) => {
       res.json({ list: [] });
   });

   // Endpoint /update
   app.post('/up', (req, res) => {
       res.json({ success: true });
   });

   // Iniciar el servidor
   app.listen(port, () => {
       console.log(`Servidor corriendo en http://localhost:${port}`);
   });