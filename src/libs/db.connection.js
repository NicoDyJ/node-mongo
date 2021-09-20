const mongoose = require('mongoose');

let db;

if(!db){
    db = mongoose.connect('mongodb://localhost/practica'), {
        userMongoClient: true
    };
}

module.exports = db;