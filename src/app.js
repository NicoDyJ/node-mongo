const express = require('express');
const app = express();
const indexRoutes = require('./routes/routes.js');
const path = require('path');

const bodyParser = require('body-parser');

//declaracion del puerto
const port = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));    //para entender los datos dese http
app.use(indexRoutes);
app.use(express.static(path.join(__dirname + '/public')));


//settings
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`servidor iniciado en el puerto: ${port}`);
});