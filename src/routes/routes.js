const express = require('express');
const router = express.Router();
const db = require('../libs/db.connection.js');

const model = require('../model/task.js');

router.get('/', (req, res) => {
        model.find({}, function(err, task){
            if(err) throw err;
            res.render('index', {
                title: 'crud',
                tasks: task
            });
        }); 
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/add', (req, res) => {
    let body = req.body;
    body.status = false;
    model.create(body, (err, task) => {
        if(err) throw err;
        res.redirect('/');
    });
    
    console.log(req.body);
})

module.exports = router;