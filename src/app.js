const express = require('express');
const app = express();

const Task = require('./model/Task');

// Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', async (req , res) => {
    const tasks = await Task.find();
    res.render('index', {tasks});
})

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Create Task
app.post('/create', async (req, res) => {
    const newTask = new Task({task: req.body.task, description: req.body.description});
    await newTask.save();
    res.redirect('/');
})

// Statics Files
app.use(express.static(__dirname + '/public'))

module.exports = app;
