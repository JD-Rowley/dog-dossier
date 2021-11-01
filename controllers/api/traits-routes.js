const router = require('express').Router();
const { Traits } = require('../../models');

router.get('/', (req, res) => {
    Traits.findAll()
        .then(dbTraitsData => res.json(dbTraitsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Traits.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbTraitsData => {
        if (!dbTraitsData) {
            res.status(404).json({ message: 'No trait data for this id' });
            return;
        }
        res.json(dbTraitsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Traits.create({
        traits_name: req.body.traits_name
    })
    .then(dbTraitsData => res.json(dbTraitsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Traits.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbTraitsData => {
        if (!dbTraitsData) {
            res.status(404).json({ message: 'No trait data for this id' });
            return;
        }
        res.json(dbTraitsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Traits.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbTraitsData => {
        if (!dbTraitsData) {
            res.status(404).json({ message: 'No trait data for this id' });
            return;
        }
        res.json(dbTraitsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;