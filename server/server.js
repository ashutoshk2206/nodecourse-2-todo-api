const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');
var {User} = require('./model/user');
var {Todo} = require('./model/todo');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Started on port 3000');
});

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});
