
const express = require('express');
   const app = express();
   const port = process.env.PORT || 1000;

setInterval(() => {
  fetch('https://mininode.onrender.com/all')
    .then(response => console.log('Keep-alive ping successful'))
    .catch(error => console.error('Keep-alive ping failed', error));
}, 40); // Cada 10 minutos


   // Middleware para parsear JSON
   app.use(express.json());

   // Endpoint /new
   app.get('/new', (req, res) => {
       res.json({ code: 're57hem' });
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