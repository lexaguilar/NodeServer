const express = require("express");
const { default: db } = require("./db");
const app = express();

const port = process.env.PORT || 3000; 

app.listen(port, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', function (req, res) {
    res.send('Saludos desde express 4');
});

app.get('/catalogo', function (req, res) {

    const catalogo = req.query.catalogo;

    const data = db[catalogo || 'nodata'];

    res.send({ data });

});
