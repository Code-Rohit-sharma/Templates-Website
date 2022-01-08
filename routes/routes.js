const express = require('express');
const app = express();

const path = require('path');

app.get('/login3', (req, res) => {
    res.render('loginpages/login3');
});