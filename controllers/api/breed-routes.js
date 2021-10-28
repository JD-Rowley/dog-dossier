const router = require('express').Router();
const { Breed, Color, Level, Health, Traits, Post, User } = require('../../models');

// get all breeds
router.get('/', (req, res) => {
    Breed.findAll({
        attributes: [
            'id',
            'breed_name',
            'height_min',
            'height_max',
            'weight_min',
            'weight_max',
            'color_id',
            'level_id',
            'health_id',
            'traits_id',
            'post_id',
        ],
        order: [['breed_name', 'ASC']],
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
                attributes: ['id', 'title'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbBreedData => res.json(dbBreedData))
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    });
});

// get one breed
router.get('/:id', (req, res) => {
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
                attributes: ['id', 'title'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbBreedData => {
        if (!dbBreedData) {
            res.status(404).json({ message: 'No breed found with this id' });
            return;
        }
        res.json(dbBreedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new breed
router.post('/', (req, res) => {
    Breed.create({
        breed_name: req.body.breed_name,
        height_min: req.body.height_min,
        height_max: req.body.height_max,
        weight_min: req.body.weight_min,
        weigth_max: req.body.weight_max,
        color_id: req.body.color_id,
        level_id: req.body.level_id,
        health_id: req.body.health_id,
        traits_id: req.body.traits_id,
    })
    .then(dbBreedData => res.json(dbBreedData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// edit a breed
router.put('/:id', (req, res) => {
    Breed.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbBreedData => {
        if (!dbBreedData) {
            res.status(404).json({ message: 'No breed found with that id' });
            return;
        }
        res.json(dbBreedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a breed
router.delete('/:id', (req, res) => {
    Breed.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbBreedData => {
        if (!dbBreedData) {
            res.status(404).json({ message: 'No breed found with that id' });
            return;
        }
        res.json(dbBreedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;