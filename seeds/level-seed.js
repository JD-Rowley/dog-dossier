const { Level } = require('../models');

const levelData = [
  {
    level_name: 'beginner'
  },
  {
    level_name: 'intermediate'
  },
  {
    level_name: 'expert'
  }
];

const seedLevels = () => Level.bulkCreate(levelData);

module.exports = seedLevels;
