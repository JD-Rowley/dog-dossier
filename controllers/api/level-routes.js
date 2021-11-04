const router = require('express').Router();
const { Level } = require('../../models');

router.get('/', (req, res) => {
    Level.findAll()
        .then(dbLevelData => res.json(dbLevelData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Level.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbLevelData => {
        if (!dbLevelData) {
            res.status(404).json({ message: 'No level data for this id' });
            return;
        }
        res.json(dbLevelData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Level.create({
        level_name: req.body.level_name
    })
    .then(dbLevelData => res.json(dbLevelData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Level.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbLevelData => {
        if (!dbLevelData) {
            res.status(404).json({ message: 'No level data for this id' });
            return;
        }
        res.json(dbLevelData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Level.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbLevelData => {
        if (!dbLevelData) {
            res.status(404).json({ message: 'No level data for this id' });
            return;
        }
        res.json(dbLevelData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;