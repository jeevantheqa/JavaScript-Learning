var express = require('express');
var lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
var uuid = require('uuid');
var bodyParser = require('body-parser');

var app = express();
const adapter = new FileSync('db.json');

const db = lowdb(adapter);

app.use(bodyParser.json());

app.get('/tasks', function(req, res) {
    return res.json(app.db('tasks'));
});

app.get('/tasks/:id', function(req, res) {
    var id = req.params.id;
    var task = app.db('tasks').find({
        id: id
    });
    if (task) {
        return res.json(task);
    }
    return res.status(404).end();
});

app.post('/tasks', function(req, res) {
    var task = req.body;
    task.id = uuid();
    app.db('tasks').push(task)
    return res.status(201).end();
});

app.put('/tasks/:id', function(req, res) {
    var id = req.params.id;
    var task = req.body;
    app.db('tasks')
        .chain()
        .find({
            id: id
        })
        .assign(task)
        .value()
    return res.status(201).end();
});

app.delete('/tasks/:id', function(req, res) {
    var id = req.params.id;
    app.db('tasks').remove({
        id: id
    });
    return res.status(201).end();
});

app.listen(3005, function() {
    console.log('API up and running');
});

module.exports = app;