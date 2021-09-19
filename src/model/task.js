module.exports = function(){

    var db = require('../libs/db.connection.js')();
    const mongoose = require('mongoose');
    const schema = mongoose.Schema;
    
    var task = schema({
        title: String,
        description: String,
        status: Boolean
    });

    return db.model('tasks', task);
}