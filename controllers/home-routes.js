const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Breed } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
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
    // Breed.findOne({
    //     where: {
    //         id: req.params.id
    //     },
    //     include: [
    //         {
    //             model: 'color',
    //             attributes: ['color_name']
    //         },
    //         // {
    //         //     model: 'level',
    //         //     attributes: ['level_name']
    //         // },
    //         {
    //             model: 'health',
    //             attributes: ['health_name', 'description']
    //         },
    //         {
    //             model: 'traits',
    //             attributes: ['traits_name']
    //         },
    //         {
    //             model: 'post',
    //             attributes: ['id', 'title'],
    //             include: {
    //                 model: 'user',
    //                 attributes: ['username']
    //             }
    //         }
    //     ]
    // }).then(dbBreedData => {
    //     res.render('breed-results');
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
    res.render('breed-results');
});

module.exports = router;