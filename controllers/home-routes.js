const router = require('express').Router();
const { Post } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {

    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/posts', (req, res) => {
    res.render('posts');
});

module.exports = router;