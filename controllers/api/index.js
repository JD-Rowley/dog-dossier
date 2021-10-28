const router = require('express').Router();

const breedRoutes = require('./breed-routes');

router.use('/breeds', breedRoutes);

module.exports = router;