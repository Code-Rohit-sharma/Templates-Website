const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { runInNewContext } = require('vm');
const routes = require('../routes/routes.js');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

//set static path
const staticpath = path.join(__dirname, '../public');
app.use(express.static(staticpath));

// to set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));

//register partials
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

//main routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/starpatterns', (req, res) => {
    res.render('starpatterns');
});

//services navbar routing
app.get('/signup-services', (req, res) => {
    res.render('signup-services');
});

app.get('/contact-services', (req, res) => {
    res.render('contact-services');
});

app.get('/fullpage-services', (req, res) => {
    res.render('fullpage-services')
});

//images routing
app.get('/login1', (req, res) => {
    res.render('loginpages/login1');
});

app.get('/login2', (req, res) => {
    res.render('loginpages/login2');
});

app.get('/login3', (req, res) => {
    res.render('loginpages/login3');
});

//listening the server
app.listen(port, (req, res) => {
    console.log(`Server in running at http://${hostname}:${port}`);
});