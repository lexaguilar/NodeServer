const express = require("express");
const app = express();
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', function (req, res) {
    res.send('Saludos desde express 4');
  });

app.get('/catalogo', function (req, res) {
    const catalogo = req.query.catalogo;
    res.send({ catalogo });
});