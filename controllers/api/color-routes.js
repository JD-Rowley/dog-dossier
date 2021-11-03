const router = require('express').Router();
const { Color } = require('../../models');

router.get('/', (req, res) => {
    Color.findAll()
        .then(dbColorData => res.json(dbColorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Color.findOne({
        id: req.params.id
    })
    .then(dbColorData => {
        if (!dbColorData) {
            res.status(404).json({ message: 'No color data for this id' });
            return;
        }
        res.json(dbColorData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Color.create({
        color_name: req.body.color_name
    })
    .then(dbColorData => res.json(dbColorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Color.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbColorData => {
        if (!dbColorData) {
            res.status(404).json({ message: 'No color data for this id' });
            return;
        }
        res.json(dbColorData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Color.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbColorData => {
        if (!dbColorData) {
            res.status(404).json({ message: 'No color data for this id' });
            return;
        }
        res.json(dbColorData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;