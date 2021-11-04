const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Breed, Color, Health, Traits, Level } = require('../models');

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

router.get('/search', (req, res) => {
    Breed.findAll({
        order: [['breed_name', 'ASC']],
        attributes: ['breed_name']
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
        ],
        raw: true,
        nest: true
    }).then(dbBreedData => {
        console.log(dbBreedData);
        res.render('breed-results', dbBreedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    //     res.render('breed-results', {
    //         id: 1,
    //         breed_name: 'Airedale Terrier',
    //         height_min: 21,
    //         height_max: 23,
    //         weight_min: 40,
    //         weight_max: 65,
    //         colors: [
    //             {
    //                 color_name: 'black',
    //                 breedColor: {
    //                     id: 1,
    //                     breed_id: 1,
    //                     color_id: 1
    //                 }
    //             }
    //         ],
    //         health: [
    //             {
    //                 health_name: 'hip dysplasia',
    //                 description: 'genetic condition in which the thighbone does not fit properly into the hip joint, can cause pain or lameness.',
    //                 breedHealth: {
    //                     id: 2,
    //                     breed_id: 2,
    //                     health_id: 1
    //                 }
    //             }
    //         ],
    //         traits: [
    //             {
    //                 traits_name: 'stubborn',
    //                 breedTraits: {
    //                     id: 2,
    //                     breed_id: 2,
    //                     traits_id: 1
    //                 }
    //             }
    //         ],
    //         posts: [
    //             {
    //                 title: 'Hey You!',
    //                 post_body: 'lorem ipsum',
    //                 created_at: "2021-11-04T18:04:12.000Z",
    //                 user: {
    //                     username: "jd"
    //                 }
    //             },
    //             {
    //                 title: 'What is up!',
    //                 post_body: 'lorem ipsum',
    //                 created_at: "2021-11-04T18:04:12.000Z",
    //                 user: {
    //                     username: "jd"
    //                 }
    //             },
    //             {
    //                 title: 'Cool!',
    //                 post_body: 'lorem ipsum',
    //                 created_at: "2021-11-04T18:04:12.000Z",
    //                 user: {
    //                     username: "jd"
    //                 }
    //             },
    //             {
    //                 title: 'Tubular!',
    //                 post_body: 'lorem ipsum',
    //                 created_at: "2021-11-04T18:04:12.000Z",
    //                 user: {
    //                     username: "jd"
    //                 }
    //             },
    //             {
    //                 title: 'Awesome!',
    //                 post_body: 'lorem ipsum',
    //                 created_at: "2021-11-04T18:04:12.000Z",
    //                 user: {
    //                     username: "jd"
    //                 }
    //             },
    //         ]
    //     });
    // })
});

module.exports = router;