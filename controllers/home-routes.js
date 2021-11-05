const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Breed, Color, Health, Traits, Level } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/search', (req, res) => {
    Breed.findAll({
        order: [['breed_name', 'ASC']],
        attributes: ['id', 'breed_name']
    }).then(dbBreedData => {
        const breeds = dbBreedData.map(breed => breed.get({ plain: true }));

        res.render('modal-search', { breeds });
    })
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    });
});

router.get('/posts', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_body',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('posts', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/results/:id', (req, res) => {
    Breed.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Color,
                attributes: ['color_name']
            },
            {
                model: Level,
                attributes: ['level_name']
            },
            {
                model: Health,
                attributes: ['health_name', 'description']
            },
            {
                model: Traits,
                attributes: ['traits_name']
            },
            {
                model: Post,
                attributes: ['id', 'title', 'post_body', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbBreedData => {
        const breed = dbBreedData.get({ plain: true });
        res.render('breed-results', { breed });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;