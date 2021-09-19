const express = require('express');
const router = express.Router();

const model = require('../model/task.js')();

router.get('/', (req, res) => {
    model.find({}, (err, tasks) => {
        if (err) throw err;
        res.render('index', {
            title: 'crud',
            task: tasks
        });
    });
});

module.exports = router;