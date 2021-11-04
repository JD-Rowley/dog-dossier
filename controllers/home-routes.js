const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Breed, Color, Health, Traits } = require('../models');

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
    Breed.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'breed_name',
            'height_min',
            'height_max',
            'weight_min',
            'weight_max',
        ],
        include: [
            {
                model: Color,
                attributes: ['color_name']
            },
            // {
            //     model: 'level',
            //     attributes: ['level_name']
            // },
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
                attributes: ['id', 'title', 'text-body', 'created_at'],
                include: {
                    model: 'user',
                    attributes: ['username']
                }
            }
        ]
    }).then(dbBreedData => {
        if (!dbBreedData) {
            res.status(404).json({ message: 'No breed found with this id' });
            return;
        }
        const breed = dbBreedData.get({ plain: true });

        res.render('breed-results', { breed });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.render('breed-results', {
    //     id: 1,
    //     breed_name: 'Airedale Terrier',
    //     height_min: 21,
    //     height_max: 23,
    //     weight_min: 40,
    //     weight_max: 65,
    //     colors: [
    //         {
    //             color_name: 'black',
    //             breedColor: {
    //                 id: 1,
    //                 breed_id: 1,
    //                 color_id: 1
    //             }
    //         }
    //     ],
    //     health: [
    //         {
    //             health_name: 'hip dysplasia',
    //             description: 'genetic condition in which the thighbone does not fit properly into the hip joint, can cause pain or lameness.',
    //             breedHealth: {
    //                 id: 2,
    //                 breed_id: 2,
    //                 health_id: 1
    //             }
    //         }
    //     ],
    //     traits: [
    //         {
    //             traits_name: 'stubborn',
    //             breedTraits: {
    //                 id: 2,
    //                 breed_id: 2,
    //                 traits_id: 1
    //             }
    //         }
    //     ],
    //     posts: [
    //         {
    //             title: 'Hey You!',
    //             post_body: 'lorem ipsum',
    //             user_id: 1
    //         },
    //         {
    //             title: 'What is up!',
    //             post_body: 'lorem ipsum',
    //             user_id: 1
    //         },
    //         {
    //             title: 'Cool!',
    //             post_body: 'lorem ipsum',
    //             user_id: 1
    //         },
    //         {
    //             title: 'Tubular!',
    //             post_body: 'lorem ipsum',
    //             user_id: 1
    //         },
    //         {
    //             title: 'Awesome!',
    //             post_body: 'lorem ipsum',
    //             user_id: 1
    //         },
    //     ]
    // });
});

module.exports = router;