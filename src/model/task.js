const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
});

const taskSchema = mongoose.model('tasks', schema);

module.exports = taskSchema;