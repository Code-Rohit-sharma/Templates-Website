const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { runInNewContext } = require('vm');
const mongoose = require('../mongoose/db.js');

const app = express();

const hostname = '127.0.0.1';

//include routing
app.use('/', require(path.join(__dirname, '../routes/routes.js')));

const port = process.env.PORT || 5000;

//set static path
const staticpath = path.join(__dirname, '../public');
app.use(express.static(staticpath));

// to set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));

//register partials
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

//listening the server
app.listen(port, (req, res) => {
    console.log(`Server in running at http://${hostname}:${port}`);
});