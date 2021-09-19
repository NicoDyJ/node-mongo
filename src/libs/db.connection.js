const mongoose = require('mongoose');

let db;

module.exports = function() {
    if(!db){
        db = mongoose.connect('mongodb://localhost/practica'), {
            userMongoClient: true
        };
    }
    return db;
}