const express = require('express');
const path = require('path');

const router = express.Router();

//main routing
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/starpatterns', (req, res) => {
    res.render('starpatterns');
});

//services navbar routing
router.get('/signup-services', (req, res) => {
    res.render('signup-services');
});

router.get('/contact-services', (req, res) => {
    res.render('contact-services');
});

router.get('/fullpage-services', (req, res) => {
    res.render('fullpage-services')
});

//login pages routing
router.get('/login1', (req, res) => {
    res.render('loginpages/login1');
});

router.get('/login2', (req, res) => {
    res.render('loginpages/login2');
});

router.get('/login3', (req, res) => {
    res.render('loginpages/login3');
});

//signup pages
router.get('/signup1', (req, res) => {
    res.render('signuppages/signup1');
})

module.exports = router;