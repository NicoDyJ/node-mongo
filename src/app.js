const express = require('express');
const app = express();

const path = require('path');
const ejs = require('ejs');
const indexRoutes = require('./routes/routes.js');

//declaracion del puerto
const port = process.env.PORT || 3000;

//settings
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', ejs);

//middlewares
app.use(indexRoutes);
app.use(express.static(path.join(__dirname + '/public')));

app.listen(port, () => {
    console.log(`servidor iniciado en el puerto: ${port}`);
});