const router = require('express').Router();
const { Health } = require('../../models');

router.get('/', (req, res) => {
    Health.findAll()
        .then(dbHealthData => res.json(dbHealthData))
        .catch(err => {
            console.log(err);
            res.json(500).json(err);
        });
});

router.get('/:id', (res, req) => {
    Health.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbHealthData => {
        if (!dbHealthData) {
            res.statusCode(404).json({ message: 'No health data for this id' });
            return;
        }
        res.json(dbHealthData);
    })
    .catch(err => {
        console.log(err);
        res.statusCode(500).json(err);
    });
});

router.post('/', (req, res) => {
    Health.create({
        health_name: req.body.health_name,
        description: req.body.description
    })
    .then(dbHealthData => res.json(dbHealthData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Health.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbHealthData => {
        if (!dbHealthData) {
            res.json(404).json({ message: 'No health data for this id' });
            return;
        }
        res.json(dbHealthData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Health.destroy({
        id: req.params.id
    })
    .then(dbHealthData => {
        if (!dbHealthData) {
            res.status(404).json({ message: 'No health data for this id' });
            return;
        }
        res.json(dbHealthData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;