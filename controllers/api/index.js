const router = require('express').Router();

const breedRoutes = require('./breed-routes');
const colorRoutes = require('./color-routes');
const healthRoutes = require('./health-routes');
const levelRoutes = require('./level-routes');
const postRoutes = require('./post-routes');
const traitsRoutes = require('./traits-routes');
const userRoutes = require('./user-routes');

router.use('/breeds', breedRoutes);
router.use('/colors', colorRoutes);
router.use('/health', healthRoutes);
router.use('/levels', levelRoutes);
router.use('/posts', postRoutes);
router.use('/traits', traitsRoutes);
router.use('/users', userRoutes);

module.exports = router;